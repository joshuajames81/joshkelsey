import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Menu Ideas",
  description:
    "Twenty themed meal plans for small groups and Dinner Parties, from Taco Night to Make Your Own Pizza to Breakfast for Dinner. Designed for group contribution and easy hosting.",
  alternates: { canonical: "https://joshkelsey.com/dinner-parties/menu-ideas" },
  openGraph: {
    title: "Menu Ideas | Dinner Parties | Josh Kelsey",
    description:
      "Twenty themed meal plans for small groups and Dinner Parties.",
    url: "https://joshkelsey.com/dinner-parties/menu-ideas",
  },
};

const menus = [
  {
    name: "Taco Night",
    items: ["ground beef/chicken", "tortillas", "shredded cheese", "lettuce", "onion", "salsa", "chips", "avocado"],
  },
  {
    name: "Potato Bar",
    items: ["baked potatoes", "shredded cheese", "bacon", "sour cream", "butter", "green onions", "chives", "avocado"],
  },
  {
    name: "Pasta Night",
    items: ["pasta of choice", "pasta sauce", "salad", "garlic bread"],
  },
  {
    name: "Make Your Own Pizza Night",
    items: ["pre-made pizza dough", "mozzarella cheese", "marinara sauce", "pepperonis", "peppers", "pineapples", "+ toppings of choice"],
  },
  {
    name: "Charcuterie Night",
    items: ["2-4 cheeses", "prosciutto", "salami", "grapes", "veggies", "hummus", "crackers"],
  },
  {
    name: "Burrito Bowls",
    items: ["ground beef/chicken", "rice", "beans", "shredded cheese", "lettuce", "onion", "salsa", "avocado"],
  },
  {
    name: "Salad Bar",
    items: ["lettuce", "grilled chicken", "quinoa", "roasted veggies", "cheese", "dressing", "+ toppings of choice"],
  },
  {
    name: "Breakfast for Dinner",
    items: ["pancakes/waffles", "french toast", "syrup", "eggs", "bacon", "hashbrowns", "fruit"],
  },
  {
    name: "Grilled Cheese and Soup Night",
    items: ["bread of choice", "cheddar cheese", "provolone", "pepper jack", "bacon", "tomato soup"],
  },
  {
    name: "Stir Fry Night",
    items: ["teriyaki chicken", "fried rice", "peppers", "onions", "mushrooms", "edamame", "dumplings"],
  },
  {
    name: "Travel the World Night",
    items: ["bring your favorite non-American dish for a potluck-style night"],
  },
  {
    name: "Mediterranean Bowls",
    items: ["chicken", "falafel", "basmati rice", "feta cheese", "onions", "tzatziki/hummus", "cucumbers"],
  },
  {
    name: "Fry Night",
    items: ["french fries", "sweet potato fries", "tater tots", "cheese", "chili", "bacon", "ranch"],
  },
  {
    name: "Chili Night",
    items: ["chili", "cornbread", "shredded cheese", "sour cream", "green onion", "chives", "avocado"],
  },
  {
    name: "App Night",
    items: ["nachos", "wings", "egg rolls", "chips/salsa", "cheese/crackers", "hummus/veggies"],
  },
  {
    name: "Backyard BBQ",
    items: ["hot dogs", "burgers", "mac and cheese", "chips", "salad", "fruit"],
  },
  {
    name: "BBQ Sliders",
    items: ["pulled pork", "hawaiian rolls", "coleslaw", "fries", "chips", "salad"],
  },
  {
    name: "Potluck Night",
    items: ["everyone brings their favorite family dish or a dish they loved growing up"],
  },
  {
    name: "BYO Dip Night",
    items: ["tortilla/pita chips", "bread/baguette", "spinach dip", "buffalo chicken dip", "hummus", "tzatziki", "guacamole", "veggies"],
  },
  {
    name: "Poke Bowls",
    items: ["tuna/salmon", "rice", "green onions", "cucumbers", "avocado", "cilantro", "mango/pineapple", "edamame"],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <article className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <header className="mb-14 md:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/dinner-parties"
                className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans hover:underline"
              >
                Dinner Parties
              </Link>
              <span className="text-muted font-sans text-xs" aria-hidden>/</span>
              <p className="uppercase text-[11px] tracking-[0.22em] text-muted font-sans">
                Reference
              </p>
            </div>
            <h1 className="font-display text-display-lg md:text-display-xl font-medium leading-[1] text-ink mb-8">
              Menu <span className="italic text-accent">Ideas.</span>
            </h1>
            <p className="font-serif text-lg md:text-xl text-ink/80 leading-relaxed max-w-prose">
              Twenty themed meal plans we rotate through for our Dinner Parties at
              FOUNT. Designed for easy hosting, group contribution, and a fun theme for
              the night. Use these. Adapt them. Build your own.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menus.map((m) => (
              <div
                key={m.name}
                className="border border-border bg-paper p-6 md:p-7"
              >
                <h2 className="font-display text-xl md:text-2xl text-ink mb-4 leading-tight">
                  {m.name}
                </h2>
                <ul className="font-serif text-ink/80 space-y-1.5 text-base">
                  {m.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-border/70 max-w-prose">
            <h2 className="font-display text-3xl text-ink mb-6 leading-tight">
              A few tips on food
            </h2>
            <div className="font-serif text-lg text-ink/85 leading-relaxed space-y-5">
              <p>
                Create a main dish that is easily added to. People can bring sides or
                complementary items. That way the Hospitality leader isn&rsquo;t
                carrying it all.
              </p>
              <p>
                Go seasonal. Pick fresh items that are in season. Make the night feel
                festive for fall, winter, or summer. Seasonal food is part of the
                atmosphere.
              </p>
              <p>
                Check for dietary restrictions. If someone in your group is
                gluten-free, vegan, or vegetarian, have options for them. Everyone
                eats. Nobody feels like an afterthought.
              </p>
              <p>
                Real serving dishes matter. Transfer store-bought items into a nice
                bowl. Small touches of excellence go a long way in making a night feel
                elevated and welcoming.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/dinner-parties/culture"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-sans hover:bg-ink hover:text-paper transition-colors"
              >
                Read more on Culture: Food and Hospitality <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
