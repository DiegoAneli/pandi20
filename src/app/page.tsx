import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import RecipeGrid from "@/components/RecipeGrid";
import StorySection from "@/components/StorySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeatureSection />
      <RecipeGrid />
      <StorySection />
      <ContactSection />
    </Layout>
  );
}
