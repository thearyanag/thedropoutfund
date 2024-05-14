import { z } from "zod";

const initiativesSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Initiatives = z.infer<typeof initiativesSchema>;

// export async function getProjects(
//   number: 1 | 2 | 3 | 4 | 5 | 6,
// ): Promise<Project[]> {
//   const res = await fetch("https://gh-pinned.vercel.app/api/user/nexxeln").then(
//     res => res.json(),
//   )

//   const projects = projectSchema.array().parse(res)

//   return projects.slice(0, number)
// }

export async function getInitiatives(): Promise<Initiatives[]> {
  return [
    {
      repo: "idea grant",
      link: "https://airtable.com/app6ybj63hzausgWb/pagaCVJzddHvGEu8Q/form",
      description: "10K inr for 6 months to work on a project",
    },
    {
      repo: "100xdevs cohort",
      link: "https://airtable.com/app6ybj63hzausgWb/pagfPnhWGZcnOYWHm/form",
      description: "to get more people into tech",
    }
  ];
}
