import {EmailData} from '@sendgrid/helpers/classes/email-address'

/** @exampledata https://docs.medusajs.com/plugins/notifications/sendgrid */
export interface Templates {
  /** Template to be sent to the customer when they place a new order. */
  order_placed_template?: string
  order_canceled_template?: string
  order_shipped_template?: string
  order_return_requested_template?: string
  order_items_returned_template?: string
  claim_shipment_created_template?: string
  swap_created_template?: string
  swap_shipment_created_template?: string
  swap_received_template?: string
  gift_card_created_template?: string
  customer_password_reset_template?: string
  user_password_reset_template?: string
  medusa_restock_template?: string
  order_refund_created_template?: string
}

export interface PluginOptions {
  api_key: string
  from: string
  templates: Templates;
  /** BCC email address to send to when an order is placed. */
  orderPlacedBcc?: EmailData|EmailData[]
  /** locale as key example de-DE */
  localization: {
    [key: string]: Templates;
  }
}

