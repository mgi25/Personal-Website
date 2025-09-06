class EmailAdapter:
    def send_double_opt_in(self, email, token):
        print(f"Sending opt-in email to {email} with token {token}")

    def send_welcome_subscriber(self, email):
        print(f"Sending welcome email to {email}")

    def send_receipt(self, user, plan):
        print(f"Sending receipt to {user.email} for plan {plan}")


email_adapter = EmailAdapter()
