export interface ProjectSpec {
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  name: string;
  desc: string;
  year: string;
  why?: string;
  problem?: string;
  specs?: ProjectSpec[];
  result?: string;
  plain?: string;
  images?: string[];
  certificate?: string;
  stack?: string[];
  // no href = disabled, rendered greyed out with the note
  links?: Array<{
    label: string;
    href?: string;
    note?: string;
  }>;
}

export const projects: Project[] = [
  {
    id: "01",
    name: "Stepback Store",
    desc: "An online store backend covering carts, checkout with tax and shipping, Midtrans payments, and order status updates.",
    year: "2025",
    plain: "In short: customers can browse an online shop, pay with the payment methods they already use (bank transfer, GoPay, QRIS, minimarket), see real delivery prices for their address, and get an order email. My job was making sure all of that works reliably behind the scenes, even when a payment is late or fails and the shop has to put stock back automatically.",
    why: "This was the final project (UAS) for a course at my university, built in a small team where I owned the backend. I treated it as a test of how far past a CRUD demo I could get: what really happens the moment someone clicks \"pay\", how inventory stays sane when two people buy the last unit, and how a third-party payment always finds its way back into our system.",
    problem: "The scenario we picked: a small shop owner would normally juggle different tools for cart, shipping quotes, and payments, and those tools never talk to each other. Stepback connects the whole journey: someone can shop and pay step by step through one website, and whenever a payment goes through, fails, or never comes back, the order and the stock update by themselves with no manual fixing.",
    specs: [
      {
        label: "Cart system",
        detail: "Guest carts keyed by a session UUID, then merged into one active cart per user on login (enforced at the database level), with expiry and abandonment tracking built in.",
      },
      {
        label: "Checkout",
        detail: "Order creation runs in a single atomic transaction: shipping address snapshot, 11% tax, and a fixed app fee are computed server-side. Guests can also checkout just with an email address.",
      },
      {
        label: "Payments",
        detail: "Midtrans via the Core API: BCA/BRI/BNI/CIMB/Permata virtual accounts, Mandiri e-channel, GoPay, QRIS, Indomaret/Alfamart, and Akulaku. The notification webhook flips orders to success, or cancels them and restocks, for cancel/deny/expire.",
      },
      {
        label: "Shipping",
        detail: "Live rates from the Biteship API across 13+ couriers (JNE, J&T, SiCepat, etc.), resolved against each address's Biteship area id or postal code, so the customer picks a real service, not a flat fee.",
      },
      {
        label: "Stock & email",
        detail: "Every buy, cancel, and restock moves through a StockMovement ledger, so the variant stock is an audit trail, not just a column that gets incremented. Order emails are rendered from Django templates.",
      },
      {
        label: "Infrastructure",
        detail: "JWT auth with SimpleJWT, MariaDB behind Django 5, Docker Compose for local and prod, gunicorn + whitenoise deployment, and a set of API smoke-test scripts.",
      },
    ],
    result: "For a coursework deadline, it went further than it had to. The full buying journey works: add items, see real shipping prices, pay with popular local options, and if a payment fails, the system reverses the order and puts stock back on its own. Watching a test payment turn into a real order was the most satisfying thing I built that semester. It never saw real customers, and with more time I would clean up a payment file that got too big and make the shipping price lookups faster, since they are the slowest parts of the flow.",
    stack: ["Django", "Django REST Framework", "MariaDB", "SimpleJWT", "Midtrans", "Biteship", "Next.js", "Docker"],
    images: [
      "/stepback/stepback-1.webp",
      "/stepback/stepback-2.webp",
      "/stepback/stepback-3.webp",
      "/stepback/stepback-4.webp",
      "/stepback/stepback-5.webp",
      "/stepback/stepback-6.webp",
      "/stepback/stepback-7.webp",
    ],
    links: [
      { label: "Live site", note: "not deployed yet" },
      { label: "Source code", note: "private repo" },
    ],
  },
  {
    id: "02",
    name: "Spendio",
    desc: "A personal expense tracker for accounts, transactions, budgets, recurring bills, and savings goals.",
    year: "2026",
    plain: "Spendio is an app for tracking my own money. I can add accounts, record income and expenses, set budgets, schedule repeating bills, and save toward a goal. The dashboard shows my balance and where my money went this month.",
    why: "I wanted one place to see where my money went without updating a spreadsheet. It also gave me a reason to build a real backend instead of relying on Supabase.",
    problem: "Spreadsheets get messy when money moves between accounts and bills repeat. Spendio keeps everything connected, so a transaction updates the right balance and the monthly summary at the same time.",
    specs: [
      {
        label: "The app",
        detail: "Next.js with Tailwind CSS. The dashboard, transactions, accounts, budgets, recurring bills, and savings pages are all built.",
      },
      {
        label: "Backend",
        detail: "Express and PostgreSQL, connected with Drizzle ORM. Shared Zod schemas keep request and response types in sync with the frontend.",
      },
      {
        label: "Balances",
        detail: "Every transaction runs in one database transaction, so two changes at once cannot make an account balance drift.",
      },
      {
        label: "Login",
        detail: "Better Auth handles email/password and Google login, and keeps the old Supabase passwords working.",
      },
      {
        label: "Testing",
        detail: "Unit tests and API smoke tests cover login, permissions, transfers, concurrent transactions, and pagination. CI runs them on every push.",
      },
    ],
    result: "The rebuilt version works locally, but my real data is still on Supabase. The migration and cutover are the next step, and the backend is planned for Oracle Cloud. This project taught me a lot about auth, database transactions, and keeping money numbers correct.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "PostgreSQL", "Drizzle ORM", "Better Auth", "Docker"],
    links: [
      { label: "Live demo", note: "runs locally" },
      { label: "Source code", note: "private repo" },
    ],
  },
  {
    id: "03",
    name: "Kelola.in",
    desc: "A POS and business dashboard for small shops, with a cashier, stock tracking, finance reports, and AI insights.",
    year: "2026",
    plain: "Kelola.in is a web app for running a small shop. The cashier page handles sales and discounts, the product page tracks stock in batches, and the finance page shows revenue, expenses, and profit. There is also an AI page for sales predictions and product bundle ideas, plus a receipt scanner that reads a photo instead of making you type every item by hand.",
    why: "This started as our Dicoding capstone. We wanted a project that felt like a real product, not a demo that only works on one screen. Small shops usually juggle a cashier app, a stock spreadsheet, and a notebook for expenses. We wanted to see if we could put all three in one place and make the data useful.",
    problem: "The hard part is not showing a chart. It is keeping the numbers connected. When a sale happens, stock has to go down, the transaction has to be recorded, and profit has to use the cost of the batch that was actually sold. If those updates happen separately, the dashboard becomes fiction. Kelola.in handles them in one flow and scopes everything to the shop that owns the data.",
    specs: [
      {
        label: "Cashier",
        detail: "Product grid, cart, discounts, and checkout. A sale records the items, reduces stock, and feeds the finance page without a second entry.",
      },
      {
        label: "Stock",
        detail: "Products, categories, restocking, FIFO batches, and low-stock notifications. Cost of goods sold follows the oldest batch first, so profit is based on real batch costs.",
      },
      {
        label: "Finance",
        detail: "Revenue, expenses, profit, trends, and a filterable transaction history. The dashboard supports week, month, year, and custom ranges, with pagination on long lists.",
      },
      {
        label: "AI and OCR",
        detail: "Revenue prediction, demand forecasting, bundle suggestions, and receipt photo scanning with a blur check. My teammates built the models and data side; I integrated their service into the Express API and the React screens.",
      },
      {
        label: "Access",
        detail: "JWT login, bcrypt passwords, custom roles, page-level permissions, and separate data per organization. A user only sees the pages and records their role allows.",
      },
      {
        label: "Stack",
        detail: "React 19 and Vite on the frontend. Express 5, Prisma, PostgreSQL, and Upstash Redis on the backend. The frontend runs on Vercel, the API on Fly.io, and the database on Supabase.",
      },
    ],
    result: "We shipped it as a working live app at kelolain.vercel.app, with the API on Fly.io. I was the fullstack developer: most of the Express API, the Prisma schema, the auth and permission flow, and a large part of the React app. The AI and data science work came from my teammates; my job was making their service usable inside the product. The live demo uses a test account (test / admin) if you want to click around.",
    images: ["/kelola-in/keuangan.webp", "/kelola-in/insight.webp"],
    stack: ["React", "Vite", "Tailwind CSS", "Express", "Prisma", "PostgreSQL", "Upstash Redis", "Docker"],
    links: [
      { label: "Live demo", href: "https://kelolain.vercel.app" },
      { label: "Source code", href: "https://github.com/Bitodette/kelolain-dicoding" },
    ],
  },
  { id: "04", name: "Nandur", desc: "asdasd.", year: "2026" },
  {
    id: "05",
    name: "Line Follower",
    desc: "A from-scratch line follower robot for OTN 2023: hand-cut MDF chassis, standard gear motors, and a closed loop system. It finished the whole track; the speed race was another story.",
    year: "2023",
    plain: "I built a working robot from scratch for a national robotics competition held in Bekasi. It was the first time my school had ever competed in this event, and our robot completed the entire course without a single wrong turn. We lost on speed, but the build, wiring, and programming were all ours from zero.",
    why: "I built this robot from scratch to represent my school, SMAN 28 Kabupaten Tangerang, at OTN 2023 (UNISMA Bekasi, December 16 to 17, 2023). It was our school's first line follower competition, so we just assumed DIY was the rule. Once we arrived, it turned out every other team was running factory kits. Either way, building it myself taught me the fundamentals: how the sensors, the motor driver, and the code talk to each other.",
    specs: [
      {
        label: "Custom chassis",
        detail: "No precision-cut acrylic chassis here. I cut the base plate by hand from an MDF board and assembled it with supporting parts.",
      },
      {
        label: "Drive system",
        detail: "Standard yellow-gear DC motors on both sides of the wheels. Nothing fancy, but they get the job done.",
      },
      {
        label: "Power & control",
        detail: "An L298N motor driver (the classic red module) sits in the middle of the chassis: battery power goes in on one side, motors get fed on the other, and it relays signals from the microcontroller.",
      },
      {
        label: "Line sensors",
        detail: "An infrared sensor module mounted on a little wooden bracket at the front reads the color contrast of the track.",
      },
      {
        label: "Testing",
        detail: "PID calibration and basic control logic were tested at home on a small handmade track, black tape over a white surface. At school there was a bigger track to play with, and race day was a whole different level of complexity.",
      },
    ],
    result: "On race day the robot ran the entire course from start to finish without ever leaving the line, even though the competition track was more complex than anything I'd tested on before. In terms of lap time, though? It got beaten badly. Standard DC motors, a chunky MDF chassis, and zero racing parts just couldn't keep up with the commercial kits most competitors brought. But the main goal was met: I designed the thing, programmed it, and proved that a closed loop system built from basic components can run stably.",
    images: ["/line-follower/robot.webp"],
    certificate: "/line-follower/sertifikat-otn-2023.pdf",
  },
];
