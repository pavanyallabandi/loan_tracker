# Loan Tracker App

A full-stack loan tracker app built with Next.js, Chakra UI, Supabase, and SWR.

## Features

- User Authentication (Supabase)
- Add, view, and manage multiple loans
- Track monthly interest and principal payments
- Dashboard with totals/statistics
- Per-loan history and stats
- Export payment data to CSV
- Responsive, modern UI

## Getting Started

1. **Clone this repo**
   ```bash
   git clone https://github.com/pavanyallabandi/loan_tracker.git
   cd loan_tracker
   ```

2. **Create a project in [Supabase.io](https://supabase.io)**
   - Copy your Supabase URL and anon key.

3. **Create tables in your Supabase project**
   - Use the script in `supabase_schema.sql`.

4. **Copy environment variables**
   - Rename `.env.local.example` to `.env.local` and fill in your Supabase credentials.

5. **Install dependencies**
   ```bash
   npm install
   ```

6. **Run locally**
   ```bash
   npm run dev
   ```

7. **Deploy to [Vercel](https://vercel.com/import)**

## Supabase Table Schema

See `supabase_schema.sql` for the latest schema.

## License

MIT
