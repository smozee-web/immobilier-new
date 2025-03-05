export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">VIDELA Group</h3>
            <p className="text-muted-foreground">
              Votre partenaire immobilier de confiance pour des investissements sécurisés et flexibles.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>Accompagnement Administratif</li>
              <li>Flexibilité de Paiement</li>
              <li>Sécurité d'Investissement</li>
              <li>Sécurité Juridique</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Pour toute question ou information supplémentaire, n'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} VIDELA Group. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
