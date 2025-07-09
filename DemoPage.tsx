import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const isWeb = screenWidth > 768;

interface DemoPageProps {
  onGoBack: () => void;
}

export default function DemoPage({ onGoBack }: DemoPageProps) {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    whatsapp: "",
    email: "",
    siteLink: "",
    aceitaTermos: false,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    // Limpar mensagens anteriores
    setShowSuccessMessage(false);
    setShowErrorMessage(false);
    
    // Validação básica dos campos obrigatórios
    if (!formData.nome || !formData.sobrenome || !formData.whatsapp || !formData.email || !formData.siteLink || !formData.aceitaTermos) {
      setErrorMessage("Por favor, preencha todos os campos obrigatórios e aceite os termos de uso.");
      setShowErrorMessage(true);
      return;
    }

    try {
      setIsSubmitting(true);
      // Enviar dados para Google Forms
      await submitToGoogleForms(formData);
      
      // Mostrar mensagem de sucesso
      setShowSuccessMessage(true);
      
      // Limpar o formulário
      setFormData({
        nome: "",
        sobrenome: "",
        whatsapp: "",
        email: "",
        siteLink: "",
        aceitaTermos: false,
      });
      
      // Ocultar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setErrorMessage("Ocorreu um erro ao enviar o formulário. Tente novamente.");
      setShowErrorMessage(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para enviar dados ao Google Forms
  const submitToGoogleForms = async (data: typeof formData) => {
    // CONFIGURAÇÃO DO GOOGLE FORMS
    // Substitua pela URL do seu Google Forms e pelos IDs dos campos
    const GOOGLE_FORMS_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeHt1yiq4L22-jtzWEgoiz8AhtQ2btzIaKW1wjjDd42Td19aQ/formResponse";

    // IDs dos campos do Google Forms (você precisa descobrir esses IDs)
    const FIELD_IDS = {
      nome: "entry.568648339", // Substitua pelo ID real do campo Nome
      sobrenome: "entry.314909935", // Substitua pelo ID real do campo Sobrenome
      whatsapp: "entry.1604284716", // Substitua pelo ID real do campo WhatsApp
      email: "entry.20252584", // Substitua pelo ID real do campo Email
      siteLink: "entry.1507474404", // Substitua pelo ID real do campo Site
    };

    // Criar FormData para envio
    const formDataToSend = new FormData();
    formDataToSend.append(FIELD_IDS.nome, data.nome);
    formDataToSend.append(FIELD_IDS.sobrenome, data.sobrenome);
    formDataToSend.append(FIELD_IDS.whatsapp, data.whatsapp);
    formDataToSend.append(FIELD_IDS.email, data.email);
    formDataToSend.append(FIELD_IDS.siteLink, data.siteLink);

    // Fazer a requisição
    const response = await fetch(GOOGLE_FORMS_URL, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors", // Importante para Google Forms
    });

    // Nota: Com mode: "no-cors", não conseguimos verificar o status da resposta
    // mas se não houver erro, o envio foi bem-sucedido
    console.log("Dados enviados para Google Forms:", data);
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {isWeb ? (
          <>
            <Text style={styles.logo}>🚀 AppConverter</Text>
            <View style={styles.nav}>
              <Text style={styles.navItem}>Como Funciona</Text>
              <Text style={styles.navItem}>Vantagens</Text>
              <Text style={styles.navItem}>Preços</Text>
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={onGoBack}>
              <Text style={styles.backButton}>← Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.logo}>🚀 AppConverter</Text>
            <TouchableOpacity
              style={styles.hamburgerButton}
              onPress={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Text style={styles.hamburgerIcon}>{isMenuOpen ? "✕" : "☰"}</Text>
            </TouchableOpacity>
          </>
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

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>📋 Solicitar Demonstração</Text>
          <Text style={styles.formSubtitle}>
            Preencha seus dados e receba uma demonstração personalizada do seu
            app
          </Text>

          <View style={styles.form}>
            {/* Nome */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Nome *</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={formData.nome}
                onChangeText={(text) => updateFormData("nome", text)}
                placeholderTextColor="#999"
              />
            </View>

            {/* Sobrenome */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Sobrenome *</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu sobrenome"
                value={formData.sobrenome}
                onChangeText={(text) => updateFormData("sobrenome", text)}
                placeholderTextColor="#999"
              />
            </View>

            {/* WhatsApp */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Número de WhatsApp *</Text>
              <TextInput
                style={styles.input}
                placeholder="(11) 99999-9999"
                value={formData.whatsapp}
                onChangeText={(text) => updateFormData("whatsapp", text)}
                placeholderTextColor="#999"
                keyboardType="phone-pad"
              />
            </View>

            {/* E-mail */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>E-mail Corporativo *</Text>
              <TextInput
                style={styles.input}
                placeholder="seu@email.com"
                value={formData.email}
                onChangeText={(text) => updateFormData("email", text)}
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Link do Site */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Link do Site *</Text>
              <TextInput
                style={styles.input}
                placeholder="https://seu-site.com.br"
                value={formData.siteLink}
                onChangeText={(text) => updateFormData("siteLink", text)}
                placeholderTextColor="#999"
                keyboardType="url"
                autoCapitalize="none"
              />
            </View>

            {/* Checkbox Termos */}
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() =>
                updateFormData("aceitaTermos", !formData.aceitaTermos)
              }
            >
              <View
                style={[
                  styles.checkbox,
                  formData.aceitaTermos && styles.checkboxChecked,
                ]}
              >
                {formData.aceitaTermos && (
                  <Text style={styles.checkboxCheck}>✓</Text>
                )}
              </View>
              <View style={styles.checkboxLabelContainer}>
                <Text style={styles.checkboxLabel}>Aceito os </Text>
                <Text style={styles.checkboxLinkText}>termos de uso</Text>
                <Text style={styles.checkboxLabel}> e </Text>
                <Text style={styles.checkboxLinkText}>política de privacidade</Text>
                <Text style={styles.checkboxLabel}> *</Text>
              </View>
            </TouchableOpacity>

            {/* Mensagem de Sucesso */}
            {showSuccessMessage && (
              <View style={styles.successMessage}>
                <Text style={styles.successMessageIcon}>✅</Text>
                <Text style={styles.successMessageTitle}>Formulário enviado com sucesso!</Text>
                <Text style={styles.successMessageText}>
                  Recebemos sua solicitação e entraremos em contato em breve através do WhatsApp informado.
                </Text>
              </View>
            )}

            {/* Mensagem de Erro */}
            {showErrorMessage && (
              <View style={styles.errorMessage}>
                <Text style={styles.errorMessageIcon}>❌</Text>
                <Text style={styles.errorMessageTitle}>Erro no envio</Text>
                <Text style={styles.errorMessageText}>
                  {errorMessage}
                </Text>
              </View>
            )}

            {/* Botão Submit */}
            <TouchableOpacity
              style={[
                styles.submitButton,
                isSubmitting && styles.submitButtonDisabled
              ]}
              onPress={handleSubmit}
              disabled={isSubmitting}
            >
              <Text style={styles.submitButtonText}>
                {isSubmitting ? "📤 Enviando..." : "🚀 Solicitar Demonstração"}
              </Text>
            </TouchableOpacity>

            {/* Botão Voltar */}
            <TouchableOpacity style={styles.backButtonWeb} onPress={onGoBack}>
              <Text style={styles.backButtonWebText}>
                ← Voltar para página inicial
              </Text>
            </TouchableOpacity>

            <Text style={styles.formNote}>* Campos obrigatórios</Text>
          </View>
        </View>
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
            <TouchableOpacity style={styles.footerLink}>
              <Text style={styles.footerLinkText}>Termos de Uso</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerLink}>
              <Text style={styles.footerLinkText}>Política de Privacidade</Text>
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
  backButton: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "500",
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
    position: "absolute",
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
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

  // Main Content
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#f8faff",
    alignItems: "center",
  },

  // Form Container
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    maxWidth: 600,
    width: "100%",
  },
  formTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1f2937",
    marginBottom: 10,
  },
  formSubtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 30,
  },

  // Form
  form: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#f9fafb",
    color: "#1f2937",
  },

  // Checkbox
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#e5e7eb",
    borderRadius: 6,
    backgroundColor: "#f9fafb",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  checkboxCheck: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkboxLabelContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#6b7280",
  },
  checkboxLinkText: {
    fontSize: 14,
    color: "#2563eb",
    textDecorationLine: "underline",
  },

  // Submit Button
  submitButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonDisabled: {
    backgroundColor: "#9ca3af",
    opacity: 0.7,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Success Message
  successMessage: {
    backgroundColor: "#f0fdf4",
    borderWidth: 1,
    borderColor: "#16a34a",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  successMessageIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  successMessageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#16a34a",
    marginBottom: 8,
    textAlign: "center",
  },
  successMessageText: {
    fontSize: 14,
    color: "#166534",
    textAlign: "center",
    lineHeight: 20,
  },

  // Error Message
  errorMessage: {
    backgroundColor: "#fef2f2",
    borderWidth: 1,
    borderColor: "#dc2626",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  errorMessageIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  errorMessageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dc2626",
    marginBottom: 8,
    textAlign: "center",
  },
  errorMessageText: {
    fontSize: 14,
    color: "#991b1b",
    textAlign: "center",
    lineHeight: 20,
  },

  // Form Note
  formNote: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginTop: 10,
  },

  // Back Button Web
  backButtonWeb: {
    marginTop: 20,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2563eb",
    borderRadius: 8,
    backgroundColor: "#f8faff",
  },
  backButtonWebText: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "500",
  },

  // Footer (copiado do App.tsx)
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
  footerSection: {
    flex: 1,
    minWidth: isWeb ? 250 : undefined,
  },
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
