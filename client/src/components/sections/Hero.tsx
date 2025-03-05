import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Découvrez VIDELA Group
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Votre Partenaire Immobilier de Confiance pour des investissements simples et sécurisés
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Nous Contacter</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Nos Services</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
