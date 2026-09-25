"use client";

import { useState } from "react";

type Package = {
  name: string;
  tagline: string;
  price: string;
  image: string;
  description: string;
  includes: string[];
};

const packages: Package[] = [
  {
    name: "Signature Groom",
    tagline: "Our most-loved full-service groom",
    price: "Starting at $75",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=88",
    description: "A complete head-to-tail refresh customized to your pup’s coat, comfort, and style.",
    includes: ["Consultation", "Bath + blow dry", "Brush-out", "Haircut or style", "Nail trim", "Ear cleaning", "Finishing spray"],
  },
  {
    name: "Puppy’s First Groom",
    tagline: "A gentle, positive introduction",
    price: "Starting at $55",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=700&q=88",
    description: "Designed to help puppies feel safe and confident while learning the grooming routine.",
    includes: ["Gentle bath", "Brush-out", "Face/feet tidy", "Nail trim", "Positive handling breaks", "Finishing spray"],
  },
  {
    name: "Shed Control Spa Day",
    tagline: "Deep clean + de-shedding treatment",
    price: "Starting at $70",
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=700&q=88",
    description: "A coat-focused service for heavy shedders that helps loosen undercoat and reduce loose fur.",
    includes: ["De-shedding shampoo", "Conditioning treatment", "High-velocity dry", "Thorough brush-out", "Nail trim", "Finishing spray"],
  },
];

export default function PackageCards() {
  const [selected, setSelected] = useState<Package | null>(null);

  return (
    <>
      <div className="package-grid">
        {packages.map((pkg) => (
          <article className="package-card" key={pkg.name}>
            <img src={pkg.image} alt="" />
            <div>
              <p className="eyebrow">Popular package</p>
              <h3>{pkg.name}</h3>
              <p>{pkg.tagline}</p>
              <strong>{pkg.price}</strong>
              <button className="button button-secondary package-btn" onClick={() => setSelected(pkg)}>View Details →</button>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <div className="package-modal" role="dialog" aria-modal="true" aria-labelledby="package-title" onMouseDown={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close package details" onClick={() => setSelected(null)}>×</button>
            <img src={selected.image} alt="" />
            <p className="eyebrow">Zozo’s Grooming Package</p>
            <h2 id="package-title">{selected.name}</h2>
            <p>{selected.description}</p>
            <ul>{selected.includes.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="modal-actions">
              <span className="modal-price">{selected.price}</span>
              <a className="button button-primary" href="tel:+17754692228">Call to Book</a>
            </div>
            <p className="price-note">Final pricing depends on breed, size, coat condition, temperament, and service needs.</p>
          </div>
        </div>
      )}
    </>
  );
}
