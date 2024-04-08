"use client";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { ImagePreview } from "@/components/image-preview";
import { cn } from "@/lib/utils";
import { GenerateButton } from "@/components/generate-button";
import { PromptBox } from "@/components/prompt-box";
import { Select } from "@/components/select";

const texts = [
  "A mysterious forest cloaked in twilight.",
  "A futuristic cityscape bustling with energy.",
  "A tranquil beach at sunrise, with pastel hues.",
  "An enchanted castle atop a misty mountain.",
  "A cosmic voyage through swirling galaxies.",
  "A vibrant marketplace alive with colors and culture.",
  "A surreal dreamscape filled with floating islands.",
  "A majestic waterfall cascading into a serene pool.",
  "A magical garden blooming with fantastical flora.",
  "A bustling metropolis seen from above, aglow with city lights."
];

const imageResolutions: Array<number> = [
  384,
  512,
  576,
  640,
  704,
  768,
  960,
  1024,
  1152,
  1280,
  1536,
  1792,
  2048
]

export default function TextToImage({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [prompt, setPrompt] = useState<string>("");
  const [resolution, setResolution] = useState<string>("1024");
  const [renderCount, setRenderCount] = useState<string>("1");
  const [loading, setLoading] = useState<boolean>(false);
  const [outputs, setOutputs] = useState<Array<string>>([]);

  const handleResolution = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setResolution(event.target.value as string);
  }

  const handleRenderCount = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRenderCount(event.target.value as string);
  }

  const handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!prompt) {
      toast.info("Please enter a prompt to generate an image.")
      return;
    } else if (prompt.length < 10) {
      toast.info("Please enter a prompt with at least 10 characters.")
      return;
    }
    setOutputs([]);
    setLoading(true)
    try {
      setLoading(true)
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({
          model: "text2image",
          renderCount,
          resolution,
          prompt
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      if (response.status !== 200) {
        setLoading(false);
        const body = await response.json();
        const errorMessage = body.message === "no_credits" ? "No Credits Left. Buy More to generate new images." : "Failed to initiate AI. Please try again."
        toast.error(errorMessage)
        return;
      }
  
      const { outputs } = await response.json();
      setOutputs(outputs);
      setLoading(false);
      window.dispatchEvent(new CustomEvent("creditsUpdated"));
    } catch (e) {
      setLoading(false);
      toast.error(JSON.stringify(e) || "Failed to initiate AI. Please try again.")
    }
  }

  return (
    <main className="dashboard-main">
      <div className="dashboard-content flex items-center flex-col">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="space-y-4 w-full md:basis-1/3">
            <div>
              <PromptBox
                placeholderList={texts}
                value={prompt}
                onPromptChange={handlePromptChange}
              />
              <div className="text-xs leading-4 block mt-5">
                Enter the text you want to generate an image from. You can enter a maximum of 1000 characters.
              </div>
            </div>
            <Select
              label="Select Resolution"
              value={resolution}
              onValueChange={handleResolution}
              options={imageResolutions}
              description="Choose the resolution of the image you want to generate. Note that, higher resolution images will take longer to generate."
            />
            <Select
              label="Number of renders"
              value={renderCount}
              onValueChange={handleRenderCount}
              options={[1, 2, 3, 4]}
              description="Choose the number of renders you want to generate. Note that, more renders will take longer to generate. This option is provided in case you want to generate multiple variations of the same prompt."
            />
            <GenerateButton onClick={handleSubmit} loading={loading} />
          </div>
          <div className="w-full md:basis-2/3">
            {loading ? (
              <div className="mt-4 text-center">
                <span className="loading loading-spinner text-primary loading-lg" />
              </div>
            ) : null}
            {outputs.length > 0 ? (
              <div className="grid-container">
                {outputs.map((outputImage, index) => (
                  <ImagePreview
                    key={index}
                    src={outputImage}
                    loading={loading}
                    imageWidth={Number(resolution)}
                    imageHeight={Number(resolution)}
                    photoName={`photoworksai_output_${index + 1}.png`}
                    className="flex-1"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>

  )
}
