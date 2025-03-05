import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users } from "lucide-react";

export default function LegalSecurity() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Une Sécurité Juridique Inégalée
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1681505504714-4ded1bc247e7"
                alt="Signature de documents légaux"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Scale className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Régularisation garantie</h3>
                      <p className="text-muted-foreground">
                        Vous disposez de 5 ans pour obtenir l'acte de propriété officiel de votre bien.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Assistance continue</h3>
                      <p className="text-muted-foreground">
                        Nous restons à vos côtés pendant toute cette période pour vous offrir toute l'assistance nécessaire.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
