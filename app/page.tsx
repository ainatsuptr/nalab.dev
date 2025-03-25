import Image from "next/image";
import Link from "next/link";
import { Award, Github, IdCard, Linkedin, MapPin } from "lucide-react";

export default function Home() {
  const skills = ["Network Infrastructure", "Network Automation", "Operational Enhancement", "All AWS Certified", "Generative AI"];

  const contactLinks = [
    { href: "https://github.com/ainatsuptr", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/ainatsuptr/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://my.prairie.cards/u/ainatsu-ptr", icon: IdCard, label: "Prairie Card" },
    { href: "https://www.credly.com/users/natsuki-aikawa", icon: Award, label: "Credly" }
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-2xl sm:flex">
        {/* Left side - Profile Photo */}
        <div className="flex flex-col items-center justify-center bg-primary p-8 text-primary-foreground sm:w-1/3">
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-primary-foreground sm:h-32 sm:w-32 md:h-40 md:w-40">
            <Image src="/placeholder.svg?height=160&width=160" alt="Profile" fill className="object-cover" priority />
          </div>
          <h1 className="text-xl font-bold mb-2">Natsuki Aikawa</h1>
          <p className="text-center text-sm mb-10">Technical Architect</p>
          <p className="text-center text-sm flex items-center justify-center gap-1">
            <MapPin size={14} aria-hidden="true" /> ap-northeast-1
          </p>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-1 flex-col justify-between p-8">
          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              For five years, I was responsible for designing and building the network architecture for the banking group.
              I have now moved to a team providing various technical assistance and evaluating network architectures for financial institutions.
              Additionally, I support my company&apos;s business with Public Cloud and Gen AI.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Contact</h2>
            <div className="flex flex-wrap gap-4">
              {contactLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
