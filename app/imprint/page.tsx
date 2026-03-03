export default function ImprintPage() {
  return (
    <section className="flex min-h-screen flex-col items-center bg-white pt-24">
      <section className="container px-6 py-12 2xl:px-0">
        <h1 className="mb-12 font-slogan text-5xl text-neutral-900 md:text-6xl">
          Imprint
        </h1>
        <div className="space-y-6 font-light text-neutral-600">
          <h2 className="text-xl font-medium text-neutral-900">
            Legal Information
          </h2>

          <p>
            <strong>One and Only Furniture</strong>
            <br />
            Auhagenstraße 79
            <br />
            31863 Coppenbrügge
            <br />
            Germany
          </p>

          <p>
            <strong>Represented by:</strong>
            <br />
            Managing Directors: [Name], [Name]
          </p>

          <p>
            <strong>Contact:</strong>
            <br />
            Phone: +49 (0) 5156 979-0
            <br />
            Email: info@oando.co.in
          </p>

          <p>
            <strong>Register Entry:</strong>
            <br />
            Entry in the Handelsregister.
            <br />
            Registering Court: [Court Name]
            <br />
            Registration Number: [Number]
          </p>

          <p>
            <strong>VAT ID:</strong>
            <br />
            Sales tax identification number according to Sect. 27 a of the Sales Tax Law:
            <br />
            DE [Number]
          </p>
        </div>
      </section>
    </section>
  );
}
