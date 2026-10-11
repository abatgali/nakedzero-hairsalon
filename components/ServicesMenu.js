import { Clock3 } from "lucide-react";

const serviceGroups = [
  {
    title: "Individual Services",
    id: "individual-services",
    description: "Find your next cut, color, or texture.",
    services: [
      { name: "Haircut", duration: "45 min" },
      { name: "Perm", duration: "55 min+" },
      { name: "Highlight", duration: "55 min+" },
      { name: "Full Color", duration: "55 min+" },
      { name: "Perma Straightening", duration: "3–5 hours" },
      { name: "Digital Perm", duration: "3–5 hours" },
    ],
  },
  {
    title: "Combination Services",
    id: "combination-services",
    description: "Bring your cut, color, and texture together.",
    services: [
      { name: "Haircut & Perm", duration: "90 min" },
      { name: "Haircut + Perm + Highlight", duration: "1–2 hours" },
      { name: "Haircut + Highlight", duration: "1–2 hours" },
      { name: "Haircut + Full Color", duration: "1–2 hours" },
      { name: "Haircut + Perma Straightening", duration: null },
      { name: "Highlight + Perm", duration: null },
    ],
  },
];

export default function ServicesMenu({ headingAs: Heading = "h2" }) {
  return (
    <>
      <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
        {serviceGroups.map((group) => (
          <section
            key={group.id}
            aria-labelledby={group.id}
            className="overflow-hidden rounded-lg rounded-tl-[2rem] rounded-br-[2rem] border border-white/10 bg-stone-900"
          >
            <div className="border-b border-white/10 bg-stone-800/60 p-6 sm:p-8">
              <Heading id={group.id} className="text-3xl font-semibold text-white">
                {group.title}
              </Heading>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {group.description}
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 px-5 pb-2 pt-5 text-xs font-medium uppercase tracking-wider text-orange-400 sm:px-8">
              <Clock3 aria-hidden="true" className="h-4 w-4" />
              Appointment time
            </div>
            <dl className="divide-y divide-white/10 px-5 pb-3 sm:px-8">
              {group.services.map((service) => (
                <div
                  key={service.name}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5"
                >
                  <dt className="font-medium leading-6 text-white">
                    {service.name}
                  </dt>
                  <dd className="text-right text-sm tabular-nums text-slate-400">
                    {service.duration || "Duration varies"}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-slate-400">
        Times are approximate. A + means the service may take longer. For
        services marked &ldquo;Duration varies,&rdquo; contact us to confirm
        how much time to allow.
      </p>
    </>
  );
}
