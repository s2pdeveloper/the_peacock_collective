import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Stripe, loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-strive',
  templateUrl: './strive.component.html',
  styleUrl: './strive.component.scss',
})
export class StriveComponent {
  stripe: Stripe | null = null;
  card: any;
  paymentError: string | null = null;
  @Output() stripeEvent = new EventEmitter();
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    const style = {
      base: {
        color: '#fff',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px',
        iconColor: '#fff',
        '::placeholder': {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        ':-webkit-autofill': {
          color: '#fce883',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.stripe = await loadStripe(
      'pk_test_51PWF72RoUfMOrpS2zDM6QRuvnQHPwSKGtOx93h3JHPdVxcNpL6NbhmnqdlUHqUUiECqETZrTID9PbhAIdi210qoU001RM4Ppe4'
    );
    const expressCheckoutOptions = {
      buttonType: {
        applePay: 'buy',
        googlePay: 'buy',
        paypal: 'buynow',
      },
    };
    const elements = this.stripe!.elements();
    this.card = elements.create('card', { style: style });
    this.card.mount('#card-element');
  }

  async pay() {
    const { token, error } = await this.stripe!.createToken(this.card);
    if (error) {
      this.paymentError = error.message;
    } else {
      // Send the token to your server
      this.handlePayment(token);
    }
  }

  handlePayment(token: any) {
    console.log('Received Stripe token:', token);
    this.stripeEvent.emit(token);
    // this.http.post('http://localhost:3000/charge', { token: token })
    //   .subscribe(
    //     response => console.log('Payment successful', response),
    //     error => this.paymentError = 'Payment failed'
    //   );
  }
}
