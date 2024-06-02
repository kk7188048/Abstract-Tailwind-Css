import React from 'react';

const MainContent = () => {
  const sections = [
    { title: "Branches", description: "Abstract Branches lets you manage, version, and document your designs in one place.", icon: "🔀", link: "#" },
    { title: "Manage your account", description: "Configure your account settings, such as your email, profile details, and password.", icon: "👤", link: "#" },
    { title: "Manage organizations, teams, and projects", description: "Use Abstract organizations, teams, and projects to organize your people and your work.", icon: "📁", link: "#" },
    { title: "Manage billing", description: "Change subscriptions and payment details.", icon: "💵", link: "#" },
    { title: "Authenticate to Abstract", description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.", icon: "🔑", link: "#" },
    { title: "Abstract support", description: "Get in touch with a human.", icon: "💬", link: "#" },
  ];

  return (
    <>
      <div className="w-full bg-own-vi text-center py-8 ">
        <h1 className="text-4xl font-bold">How can we help?</h1>
        <div className="mt-4">
          <input type="text" className="w-1/2 p-2 border rounded" placeholder="Search" />
        </div>
      </div>
      <main className="container mx-auto mt-8 px-4 sm:px-8 md:px-16 lg:px-24">

      <div className="grid grid-cols-2 grid-rows-3 gap-6 mt-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded ">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">{section.icon}</div>
              <div className="font-bold">{section.title}</div>
            </div>
            <p>{section.description}</p>
            <a href={section.link} className="text-blue-500">Learn More →</a>
          </div>
        ))}
      </div>
    </main>
    </>
  );
};

export default MainContent;
