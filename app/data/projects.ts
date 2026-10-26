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
    desc: "I built the backend for an online shop, the part that runs everything after the buy button: what's in your cart, what it costs with shipping and tax, how you pay, and getting the order state in order.",
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
  { id: "02", name: "Spendio", desc: "asdasdasdasdasdasdadasdasdsdasdadasdasdsad asdasdasdasdasdasdadasdasdsdasdadasdasdsadasdasdasdasdasdasdadasdasdsdasdadasdasdsad.", year: "2025" },
  { id: "03", name: "Kelola-in", desc: "asda.", year: "2026" },
  { id: "04", name: "Nandur", desc: "asdasd.", year: "2026" },
  {
    id: "05",
    name: "Line Follower",
    desc: "A line follower robot I built from scratch for the Robotic track of OTN 2023. Hand-cut MDF chassis, standard gear motors, and a closed loop system I put together myself. It finished the whole track; the speed race was another story.",
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
