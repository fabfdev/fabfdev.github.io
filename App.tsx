import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import { typeWritterEffect } from "./typeWriterEffect";

const { width: screenWidth } = Dimensions.get("window");
const isWeb = screenWidth > 768;

export default function App() {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [message, setMessage] = useState("");

  const handleConvertWebsite = () => {
    console.log("asd")
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? 0 : index);
  };

  const faqs = [
    {
      question: "Quanto tempo leva para converter meu site em app?",
      answer:
        "O processo é rápido! Em até 24 horas seu app estará pronto para download nas lojas.",
    },
    {
      question: "Posso personalizar as cores e o design do app?",
      answer:
        "Sim! Oferecemos total personalização de cores, ícones, nome e tema para combinar com sua marca.",
    },
    {
      question: "O app funciona offline?",
      answer:
        "Sim, implementamos cache inteligente que permite visualizar páginas visitadas mesmo offline.",
    },
    {
      question: "É compatível com iOS e Android?",
      answer:
        "Perfeitamente! Seu app funcionará nativamente em ambas as plataformas com performance otimizada.",
    },
    {
      question: "Preciso ter conhecimentos técnicos?",
      answer:
        "Não! Nosso processo é 100% automatizado. Você só precisa fornecer a URL do seu site.",
    },
  ];

  let i = 0;

  useEffect(() => {
    typeWritterEffect({
      onUpdate: (current) => setMessage(current),
      onDone: (current) => {
        setMessage(current);
      },
    });
  }, []);

  useEffect(() => {
    toggleFaq(0);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🚀 AppConverter</Text>
        {isWeb ? (
          <View style={styles.nav}>
            <Text style={styles.navItem}>Como Funciona</Text>
            <Text style={styles.navItem}>Vantagens</Text>
            <Text style={styles.navItem}>Preços</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.hamburgerButton}
            onPress={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Text style={styles.hamburgerIcon}>{isMenuOpen ? "✕" : "☰"}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Mobile Menu Overlay */}
      {!isWeb && isMenuOpen && (
        <View style={styles.mobileMenu}>
          <TouchableOpacity style={styles.mobileMenuItem}>
            <Text style={styles.mobileMenuText}>Como Funciona</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem}>
            <Text style={styles.mobileMenuText}>Vantagens</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mobileMenuItem}>
            <Text style={styles.mobileMenuText}>Preços</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Hero Section */}
      <View style={styles.heroSection}>
        {/* Converter Section with Phone Mockup */}
        <View style={styles.converterMainContainer}>
          <View style={styles.converterLeftSide}>
            <Text style={styles.heroTitle}>
              Transforme seu <Text style={styles.highlight}>{message}</Text> em
              um App Nativo
            </Text>
            <Text style={styles.heroSubtitle}>
              Converta seu site em um aplicativo mobile profissional em minutos.
              Aumente suas vendas com a experiência nativa que seus clientes
              merecem.
            </Text>

            <View style={styles.converterSection}>
              <Text style={styles.converterTitle}>🎯 Converter Meu Site</Text>
              <Text style={styles.converterSubtitle}>
                Digite a URL do seu e-commerce e veja a mágica acontecer
              </Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.urlInput}
                  placeholder="https://sua-loja.com.br"
                  value={websiteUrl}
                  onChangeText={setWebsiteUrl}
                  placeholderTextColor="#999"
                />
                <TouchableOpacity
                  style={styles.convertButton}
                  onPress={handleConvertWebsite}
                >
                  <Text style={styles.convertButtonText}>
                    Converter Agora 🚀
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.convertNote}>
                ✅ Grátis para testar • ⚡ Resultado em 24h • 🔒 100% Seguro
              </Text>
            </View>
          </View>

          {/* Phone Mockup */}
          <View style={styles.phoneMockupContainer}>
            <Image
              source={require("./assets/iphone_1.png")}
              style={styles.phoneImage}
            />
            <Image
              source={require("./assets/iphone_2.png")}
              style={styles.phoneImage2}
            />
          </View>
        </View>
      </View>

      {/* Serve para sua empresa */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💼 Serve para sua Empresa?</Text>
        <View style={styles.businessCards}>
          <View style={styles.businessCard}>
            <Text style={styles.businessIcon}>🛍️</Text>
            <Text style={styles.businessTitle}>E-commerce</Text>
            <Text style={styles.businessText}>
              Lojas online, marketplaces, dropshipping
            </Text>
          </View>
          <View style={styles.businessCard}>
            <Text style={styles.businessIcon}>🍕</Text>
            <Text style={styles.businessTitle}>Delivery</Text>
            <Text style={styles.businessText}>
              Restaurantes, farmácias, mercados
            </Text>
          </View>
          <View style={styles.businessCard}>
            <Text style={styles.businessIcon}>💼</Text>
            <Text style={styles.businessTitle}>Serviços</Text>
            <Text style={styles.businessText}>
              Consultoria, agências, freelancers
            </Text>
          </View>
          <View style={styles.businessCard}>
            <Text style={styles.businessIcon}>🎓</Text>
            <Text style={styles.businessTitle}>Educação</Text>
            <Text style={styles.businessText}>
              Cursos online, escolas, tutoring
            </Text>
          </View>
        </View>
      </View>

      {/* Como Funciona */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⚙️ Como Funciona</Text>
        <View style={styles.howItWorksContainer}>
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepTitle}>Cole a URL</Text>
            <Text style={styles.stepText}>
              Insira o endereço do seu site e nós fazemos o resto
            </Text>
          </View>
          <View style={styles.stepArrow}>
            <Text style={styles.arrowText}>→</Text>
          </View>
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepTitle}>Personalize</Text>
            <Text style={styles.stepText}>
              Escolha cores, ícones e nome do seu app
            </Text>
          </View>
          <View style={styles.stepArrow}>
            <Text style={styles.arrowText}>→</Text>
          </View>
          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepTitle}>Publique</Text>
            <Text style={styles.stepText}>
              Seu app está pronto para App Store e Google Play
            </Text>
          </View>
        </View>
      </View>

      {/* Vantagens */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎯 Vantagens do App Nativo</Text>
        <View style={styles.advantagesGrid}>
          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>⚡</Text>
            <Text style={styles.advantageTitle}>Performance Superior</Text>
            <Text style={styles.advantageText}>
              Carregamento 3x mais rápido que sites móveis
            </Text>
          </View>
          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>📱</Text>
            <Text style={styles.advantageTitle}>Experiência Nativa</Text>
            <Text style={styles.advantageText}>
              Interface otimizada para mobile com gestos nativos
            </Text>
          </View>
          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>🔔</Text>
            <Text style={styles.advantageTitle}>Push Notifications</Text>
            <Text style={styles.advantageText}>
              Envie ofertas direto para seus clientes
            </Text>
          </View>
          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>💾</Text>
            <Text style={styles.advantageTitle}>Funciona Offline</Text>
            <Text style={styles.advantageText}>
              Cache inteligente para navegação sem internet
            </Text>
          </View>
          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>🛒</Text>
            <Text style={styles.advantageTitle}>Conversão +60%</Text>
            <Text style={styles.advantageText}>
              Apps convertem muito mais que sites móveis
            </Text>
          </View>
          <View style={styles.advantageCard}>
            <Text style={styles.advantageIcon}>🎨</Text>
            <Text style={styles.advantageTitle}>100% Customizável</Text>
            <Text style={styles.advantageText}>
              Cores, ícones e tema da sua marca
            </Text>
          </View>
        </View>
      </View>

      {/* Garantia */}
      <View style={styles.guaranteeSection}>
        <Text style={styles.guaranteeTitle}>🛡️ Garantia de 30 Dias</Text>
        <Text style={styles.guaranteeText}>
          Não ficou satisfeito? Devolvemos 100% do seu dinheiro, sem perguntas.
          Testamos em milhares de sites e sabemos que funciona perfeitamente.
        </Text>
        <View style={styles.guaranteeFeatures}>
          <Text style={styles.guaranteeFeature}>✅ Suporte 24/7</Text>
          <Text style={styles.guaranteeFeature}>✅ Atualizações gratuitas</Text>
          <Text style={styles.guaranteeFeature}>
            ✅ Setup completo incluído
          </Text>
        </View>
      </View>

      {/* FAQ */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>❓ Perguntas Frequentes</Text>
        <View style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <TouchableOpacity
              key={index}
              style={styles.faqItem}
              onPress={() => toggleFaq(index)}
            >
              <View style={styles.faqQuestion}>
                <Text style={styles.faqQuestionText}>{faq.question}</Text>
                <Text style={styles.faqToggle}>
                  {expandedFaq === index ? "−" : "+"}
                </Text>
              </View>
              {expandedFaq === index && (
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* CTA Final */}
      <View style={styles.finalCta}>
        <Text style={styles.finalCtaTitle}>
          Pronto para Transformar seu Negócio?
        </Text>
        <TouchableOpacity style={styles.finalCtaButton}>
          <Text style={styles.finalCtaButtonText}>
            Começar Agora - Grátis 🚀
          </Text>
        </TouchableOpacity>
        <Text style={styles.finalCtaSubtext}>
          Junte-se a mais de 10.000 empresas que já aumentaram suas vendas com
          apps nativos
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          {/* Seção 1: Empresa */}
          <View style={styles.footerSection}>
            <Text style={styles.footerLogo}>🚀 AppConverter</Text>
            <Text style={styles.footerSubtitle}>
              A solução revolucionária para sua empresa ter um app excelente,
              barato e rápido
            </Text>
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>📷 Instagram</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Text style={styles.socialButtonText}>💼 LinkedIn</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Seção 2: Menu */}
          <View style={styles.footerSection}>
            <Text style={styles.footerSectionTitle}>Menu</Text>
            <TouchableOpacity style={styles.footerLink}>
              <Text style={styles.footerLinkText}>Sobre Nós</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerLink}>
              <Text style={styles.footerLinkText}>Como Funciona?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerLink}>
              <Text style={styles.footerLinkText}>Dúvidas Frequentes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerLink}>
              <Text style={styles.footerLinkText}>Fale Conosco</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerLink}>
              <Text style={styles.footerLinkText}>Blog</Text>
            </TouchableOpacity>
          </View>

          {/* Seção 3: Fale Conosco */}
          <View style={styles.footerSection}>
            <Text style={styles.footerSectionTitle}>Fale Conosco</Text>
            <TouchableOpacity style={styles.whatsappButton}>
              <Text style={styles.whatsappButtonText}>💬 WhatsApp</Text>
            </TouchableOpacity>
            <Text style={styles.emailText}>contato@appconverter.com.br</Text>
          </View>

          {/* Seção 4: Receba Novidades */}
          <View style={styles.footerSection}>
            <Text style={styles.footerSectionTitle}>Receba Novidades</Text>
            <Text style={styles.newsletterDescription}>
              Fique por dentro das últimas novidades e dicas sobre apps
            </Text>
            <View style={styles.newsletterContainer}>
              <TextInput
                style={styles.newsletterInput}
                placeholder="Seu e-mail"
                placeholderTextColor="#9ca3af"
              />
              <TouchableOpacity style={styles.newsletterButton}>
                <Text style={styles.newsletterButtonText}>Inscrever</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Copyright */}
        <View style={styles.footerBottom}>
          <Text style={styles.copyrightText}>
            © 2024 AppConverter - Todos os direitos reservados
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563eb",
  },
  nav: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  navItem: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },

  // Hamburger Menu
  hamburgerButton: {
    padding: 8,
  },
  hamburgerIcon: {
    fontSize: 24,
    color: "#2563eb",
    fontWeight: "bold",
  },
  mobileMenu: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  mobileMenuItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  mobileMenuText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
    textAlign: "center",
  },

  // Hero Section
  heroSection: {
    paddingHorizontal: 20,
    paddingVertical: 60,
    alignItems: "center",
    backgroundColor: "#f8faff",
  },
  heroTitle: {
    fontSize: isWeb ? 48 : 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1f2937",
    marginBottom: 20,
    lineHeight: isWeb ? 56 : 40,
  },
  highlight: {
    color: "#2563eb",
  },
  heroSubtitle: {
    fontSize: isWeb ? 20 : 18,
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 40,
    lineHeight: 28,
    maxWidth: 600,
  },

  // Converter Section
  converterSection: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    maxWidth: 600,
    width: "100%",
  },
  converterTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1f2937",
    marginBottom: 10,
  },
  converterSubtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: isWeb ? "row" : "column",
    gap: isWeb ? 0 : 15,
  },
  urlInput: {
    flex: isWeb ? 1 : undefined,
    width: isWeb ? undefined : "100%",
    height: 50,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#f9fafb",
  },
  convertButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 24,
    height: 50,
    borderRadius: 12,
    marginLeft: isWeb ? 10 : 0,
    minWidth: isWeb ? 200 : undefined,
    justifyContent: "center",
    alignItems: "center",
  },
  convertButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  convertNote: {
    fontSize: 14,
    textAlign: "center",
    color: "#059669",
    marginTop: 15,
    fontWeight: "500",
  },

  // Converter Main Container
  converterMainContainer: {
    flexDirection: isWeb ? "row" : "column",
    alignItems: "center",
    justifyContent: "center",
    gap: isWeb ? 40 : 30,
    maxWidth: 1200,
    width: "100%",
  },

  // Converter Left Side
  converterLeftSide: {
    flex: isWeb ? 1 : undefined,
    alignItems: "center",
    width: isWeb ? undefined : "100%",
    maxWidth: isWeb ? 600 : undefined,
  },

  // Phone Mockup
  phoneMockupContainer: {
    position: "relative",
    flexDirection: isWeb ? undefined : "row",
    alignItems: "center",
    justifyContent: "center",
    width: isWeb ? 500 : "100%",
    height: isWeb ? 700 : 300,
    gap: isWeb ? undefined : -50,
    marginTop: isWeb ? 0 : 20,
  },
  phoneImage: {
    width: isWeb ? 280 : 180,
    height: isWeb ? 660 : 360,
    resizeMode: "contain",
    position: "absolute",
    left: 30,
    zIndex: 1,
  },
  phoneImage2: {
    width: isWeb ? 380 : 240,
    height: isWeb ? 760 : 320,
    resizeMode: "contain",
    position: "absolute",
    right: isWeb ? 0 : 30,
    zIndex: 2,
  },
  // Sections
  section: {
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  sectionTitle: {
    fontSize: isWeb ? 36 : 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1f2937",
    marginBottom: 40,
  },

  // Business Cards
  businessCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  businessCard: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    width: isWeb ? 250 : "45%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  businessIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  businessTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  businessText: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },

  // How it Works
  howItWorksContainer: {
    flexDirection: isWeb ? "row" : "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  stepCard: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    width: isWeb ? 200 : 280,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  stepNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2563eb",
    backgroundColor: "#eff6ff",
    width: 60,
    height: 60,
    textAlign: "center",
    lineHeight: 60,
    borderRadius: 30,
    marginBottom: 16,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
  },
  stepText: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },
  stepArrow: {
    display: isWeb ? "flex" : "none",
  },
  arrowText: {
    fontSize: 24,
    color: "#2563eb",
    fontWeight: "bold",
  },

  // Advantages
  advantagesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  advantageCard: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    width: isWeb ? 300 : "45%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  advantageIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  advantageTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 8,
    textAlign: "center",
  },
  advantageText: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
  },

  // Guarantee
  guaranteeSection: {
    backgroundColor: "#f0fdf4",
    paddingHorizontal: 20,
    paddingVertical: 60,
    alignItems: "center",
  },
  guaranteeTitle: {
    fontSize: isWeb ? 32 : 24,
    fontWeight: "bold",
    color: "#059669",
    marginBottom: 20,
    textAlign: "center",
  },
  guaranteeText: {
    fontSize: 16,
    color: "#374151",
    textAlign: "center",
    marginBottom: 30,
    maxWidth: 600,
  },
  guaranteeFeatures: {
    flexDirection: isWeb ? "row" : "column",
    gap: 15,
    alignItems: "center",
  },
  guaranteeFeature: {
    fontSize: 16,
    color: "#059669",
    fontWeight: "600",
  },

  // FAQ
  faqContainer: {
    maxWidth: 800,
    alignSelf: "center",
  },
  faqItem: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  faqQuestion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  faqQuestionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
    flex: 1,
  },
  faqToggle: {
    fontSize: 24,
    color: "#2563eb",
    fontWeight: "bold",
    marginLeft: 10,
  },
  faqAnswer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
  },

  // Final CTA
  finalCta: {
    backgroundColor: "#1f2937",
    paddingHorizontal: 20,
    paddingVertical: 60,
    alignItems: "center",
  },
  finalCtaTitle: {
    fontSize: isWeb ? 32 : 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  finalCtaButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  finalCtaButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  finalCtaSubtext: {
    fontSize: 14,
    color: "#9ca3af",
    textAlign: "center",
    maxWidth: 500,
  },

  // Footer
  footer: {
    backgroundColor: "#1f2937",
    paddingVertical: 40,
  },
  footerContent: {
    flexDirection: isWeb ? "row" : "column",
    paddingHorizontal: 20,
    gap: isWeb ? 40 : 30,
    justifyContent: "space-between",
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },

  // Footer Sections
  footerSection: {
    flex: 1,
    minWidth: isWeb ? 250 : undefined,
  },

  // Seção 1: Empresa
  footerLogo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  footerSubtitle: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 20,
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: "row",
    gap: 10,
  },
  socialButton: {
    backgroundColor: "#374151",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },

  // Seção 2: Menu
  footerSectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  footerLink: {
    paddingVertical: 6,
  },
  footerLinkText: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 20,
  },

  // Seção 3: Fale Conosco
  whatsappButton: {
    backgroundColor: "#059669",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    maxWidth: 150,
  },
  whatsappButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  emailText: {
    fontSize: 14,
    color: "#9ca3af",
    marginTop: 8,
  },

  // Seção 4: Newsletter
  newsletterDescription: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 20,
    marginBottom: 16,
  },
  newsletterContainer: {
    flexDirection: "column",
    gap: 10,
  },
  newsletterInput: {
    backgroundColor: "#374151",
    borderWidth: 1,
    borderColor: "#4b5563",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: "#fff",
  },
  newsletterButton: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  newsletterButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  // Footer Bottom
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: "#374151",
    marginTop: 40,
    paddingTop: 20,
    alignItems: "center",
  },
  copyrightText: {
    fontSize: 14,
    color: "#9ca3af",
    textAlign: "center",
  },
});
