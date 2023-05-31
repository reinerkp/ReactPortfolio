import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Portfolio() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/reinerkp/repos")
      .then((response) => {
        const sortedRepositories = response.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        const recentRepositories = sortedRepositories.slice(0, 5);

        const updatedRepositories = recentRepositories.map((repository) => {
          // Add logic to determine the image URL based on repository name or other criteria
          let imageUrl;

          if (repository.name === "Text-Editor-") {
            imageUrl =
              "https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?w=996&t=st=1685502098~exp=1685502698~hmac=1536efe651d9e8f3c0997261ebe52a7e4758dc29f3563fda96003aff31abd549";
          } else if (repository.name === "SocialNetworkAPI") {
            imageUrl =
              "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1685501628~exp=1685502228~hmac=865ed03b236b68f5ef3e31cbbc0023120030f5e630b47add101c67c49bfe0a4a";
          } else if (repository.name === "tech-blog") {
            imageUrl =
              "https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?w=996&t=st=1685225217~exp=1685225817~hmac=e0b4963ea1b8054600b014456ed538edb26340908de99cadd54b5e37a48ea1b2";
          } else if (repository.name === "E-CommerceBackEnd") {
            imageUrl =
              "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg?w=740&t=st=1685501628~exp=1685502228~hmac=865ed03b236b68f5ef3e31cbbc0023120030f5e630b47add101c67c49bfe0a4a";
          } else if (repository.name === "ReactPortfolio") {
            imageUrl =
              "https://img.freepik.com/free-vector/binary-code-white-background-with-floating-numbers_1017-25331.jpg?w=996&t=st=1685502128~exp=1685502728~hmac=97570d3ceb921c16b03ad6ff8ac0562878e84d0c6eb017d1550c54d4960ee341";
          } else {
            // Set a default image URL if no specific image is available for the repository
            imageUrl = "https://img.freepik.com/free-vector/cyber-lock-security-padlock-abstract-wire-low-poly-polygonal-wire-frame-mesh-looks-like-constellation-dark-blue-night-sky-with-dots-stars-illustration-background_587448-642.jpg?w=996&t=st=1685502168~exp=1685502768~hmac=9c7b983455ca9bd926420111735304f6687eb77c5002ab7c775ab9fcf4e09519";
          }

          return {
            ...repository,
            imageUrl: imageUrl,
          };
        });

        setRepositories(updatedRepositories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 id="my-work">My Portfolio</h1>
      <section className="all-project-cards">
        <div className="sub-project-cards">
        {repositories.map((repository) => (
  <article className="project-card" key={repository.id} style={{ backgroundImage: `url(${repository.imageUrl})` }}>
    <a href={repository.html_url}>
      <h3>{repository.name}</h3>
    </a>
  </article>
))}
        </div>
      </section>
    </div>
  );
}

