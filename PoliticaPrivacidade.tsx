import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const isWeb = screenWidth > 768;

interface PoliticaPrivacidadeProps {
  onGoBack: () => void;
}

export default function PoliticaPrivacidade({ onGoBack }: PoliticaPrivacidadeProps) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onGoBack}>
          <Text style={styles.backButton}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.logo}>🚀 AppConverter</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Política de Privacidade</Text>
        <Text style={styles.lastUpdated}>Última atualização: 09 de julho de 2025</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Informações que Coletamos</Text>
          <Text style={styles.sectionText}>
            Coletamos as seguintes informações:
            {"\n"}• Informações pessoais: nome, sobrenome, e-mail, WhatsApp
            {"\n"}• Informações do projeto: URL do site, preferências de design
            {"\n"}• Dados de uso: como você interage com nosso serviço
            {"\n"}• Informações técnicas: endereço IP, tipo de navegador, sistema operacional
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Como Usamos suas Informações</Text>
          <Text style={styles.sectionText}>
            Utilizamos suas informações para:
            {"\n"}• Prestar nossos serviços de conversão de sites em apps
            {"\n"}• Personalizar e melhorar sua experiência
            {"\n"}• Enviar comunicações importantes sobre seu projeto
            {"\n"}• Oferecer suporte técnico
            {"\n"}• Melhorar nossos serviços e desenvolver novos recursos
            {"\n"}• Cumprir obrigações legais e regulamentares
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Compartilhamento de Informações</Text>
          <Text style={styles.sectionText}>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
            {"\n"}• Com parceiros técnicos necessários para operação do serviço
            {"\n"}• Para cumprir obrigações legais ou ordens judiciais
            {"\n"}• Para proteger nossos direitos e segurança
            {"\n"}• Com seu consentimento explícito
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Segurança das Informações</Text>
          <Text style={styles.sectionText}>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
            {"\n"}• Criptografia de dados em trânsito e em repouso
            {"\n"}• Controle de acesso restrito às informações
            {"\n"}• Monitoramento regular de vulnerabilidades
            {"\n"}• Backup e recuperação de dados
            {"\n"}• Treinamento de equipe sobre práticas de segurança
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Seus Direitos</Text>
          <Text style={styles.sectionText}>
            Você tem os seguintes direitos sobre suas informações:
            {"\n"}• Acessar suas informações pessoais
            {"\n"}• Corrigir informações incorretas ou desatualizadas
            {"\n"}• Solicitar exclusão de suas informações
            {"\n"}• Restringir o processamento de suas informações
            {"\n"}• Portabilidade de dados
            {"\n"}• Retirar consentimento a qualquer momento
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Cookies e Tecnologias Similares</Text>
          <Text style={styles.sectionText}>
            Utilizamos cookies e tecnologias similares para:
            {"\n"}• Melhorar a funcionalidade do site
            {"\n"}• Analisar o uso do serviço
            {"\n"}• Personalizar sua experiência
            {"\n"}• Lembrar suas preferências
            {"\n"}
            Você pode controlar o uso de cookies através das configurações do seu navegador.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Retenção de Dados</Text>
          <Text style={styles.sectionText}>
            Mantemos suas informações pelo tempo necessário para:
            {"\n"}• Prestar nossos serviços
            {"\n"}• Cumprir obrigações legais
            {"\n"}• Resolver disputas
            {"\n"}• Fazer cumprir nossos acordos
            {"\n"}
            Após esse período, as informações são excluídas ou anonimizadas de forma segura.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. Alterações nesta Política</Text>
          <Text style={styles.sectionText}>
            Podemos atualizar esta Política de Privacidade periodicamente. Quando fizermos alterações significativas, notificaremos você através de e-mail ou aviso em nosso site. A data da última atualização será sempre indicada no topo desta página.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>9. Contato</Text>
          <Text style={styles.sectionText}>
            Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato:
            {"\n"}• WhatsApp: (27) 99801-2664
            {"\n"}• E-mail: contato@appconverter.com.br
            {"\n"}• Endereço: Brasil
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>10. Lei Aplicável</Text>
          <Text style={styles.sectionText}>
            Esta Política de Privacidade é regida pelas leis brasileiras, incluindo a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e demais normas aplicáveis sobre proteção de dados pessoais.
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
  placeholder: {
    width: 60,
  },
  content: {
    padding: 20,
    maxWidth: 800,
    alignSelf: "center",
  },
  title: {
    fontSize: isWeb ? 32 : 28,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 10,
    textAlign: "center",
  },
  lastUpdated: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: "#4b5563",
    lineHeight: 24,
  },
});
