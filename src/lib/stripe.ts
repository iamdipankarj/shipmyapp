import Stripe from 'stripe';

/**
 * A helper class for interacting with the Stripe API.
 */
class StripeHelper {
  private stripe: Stripe;

  /**
   * Creates a new StripeHelper instance.
   */
  constructor() {
    /**
     * The Stripe API client instance.
     * @type {Stripe}
     */
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2023-10-16' // Specify the API version if needed
    });
  }

  /**
   * Creates a new customer in Stripe.
   * @param {string} email - The email address of the customer.
   * @param {string} name - The name of the customer.
   * @returns {Promise<Stripe.Customer>} A Promise that resolves with the created customer object.
   */
  async createCustomer(email: string, name: string): Promise<Stripe.Customer> {
    try {
      const customer = await this.stripe.customers.create({
        email: email,
        name: name
      });
      return customer;
    } catch (error) {
      console.error('Error creating customer:', error);
      throw error;
    }
  }

  /**
   * Charges a customer in Stripe.
   * @param {string} customerId - The ID of the customer to charge.
   * @param {number} amount - The amount to charge, in cents.
   * @param {string} currency - The currency of the charge (e.g., 'usd').
   * @param {string} description - A description for the charge.
   * @returns {Promise<Stripe.Charge>} A Promise that resolves with the created charge object.
   */
  async chargeCustomer(customerId: string, amount: number, currency: string, description: string): Promise<Stripe.Charge> {
    try {
      const charge = await this.stripe.charges.create({
        customer: customerId,
        amount: amount,
        currency: currency,
        description: description
      });
      return charge;
    } catch (error) {
      console.error('Error charging customer:', error);
      throw error;
    }
  }

  // Add more methods for handling other Stripe API functionalities as needed
}

export default StripeHelper;
