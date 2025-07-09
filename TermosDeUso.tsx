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

interface TermosDeUsoProps {
  onGoBack: () => void;
}

export default function TermosDeUso({ onGoBack }: TermosDeUsoProps) {
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
        <Text style={styles.title}>Termos de Uso</Text>
        <Text style={styles.lastUpdated}>Última atualização: 09 de julho de 2025</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Aceitação dos Termos</Text>
          <Text style={styles.sectionText}>
            Ao acessar e usar o AppConverter, você concorda em cumprir e estar sujeito aos presentes Termos de Uso. Se você não concordar com algum destes termos, não use nosso serviço.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Descrição do Serviço</Text>
          <Text style={styles.sectionText}>
            O AppConverter é uma plataforma que permite transformar sites em aplicativos nativos para iOS e Android. Oferecemos tecnologia automatizada para converter seu site em um app profissional em até 24 horas.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Responsabilidades do Usuário</Text>
          <Text style={styles.sectionText}>
            Você é responsável por:
            {"\n"}• Fornecer informações verdadeiras e precisas
            {"\n"}• Manter a confidencialidade de suas credenciais de acesso
            {"\n"}• Usar o serviço apenas para finalidades legais
            {"\n"}• Não violar direitos de propriedade intelectual de terceiros
            {"\n"}• Garantir que seu site está em conformidade com as leis aplicáveis
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Propriedade Intelectual</Text>
          <Text style={styles.sectionText}>
            O AppConverter mantém todos os direitos sobre sua tecnologia, marca, design e conteúdo. Você mantém os direitos sobre o conteúdo do seu site convertido. Nenhuma parte deste serviço pode ser reproduzida sem autorização prévia por escrito.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. Garantias e Limitações</Text>
          <Text style={styles.sectionText}>
            Oferecemos garantia de 30 dias para nossos serviços. Nossa responsabilidade é limitada ao valor pago pelo serviço. Não nos responsabilizamos por danos indiretos, lucros cessantes ou perda de dados.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Política de Cancelamento</Text>
          <Text style={styles.sectionText}>
            Você pode cancelar seu plano a qualquer momento. Para serviços já prestados, aplicamos nossa política de reembolso conforme descrito em nossos termos de venda. Cancelamentos devem ser solicitados através do WhatsApp ou e-mail.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. Modificações nos Termos</Text>
          <Text style={styles.sectionText}>
            O AppConverter pode modificar estes termos a qualquer momento. As alterações serão publicadas nesta página com nova data de atualização. O uso continuado do serviço após alterações constitui aceitação dos novos termos.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>8. Contato</Text>
          <Text style={styles.sectionText}>
            Para dúvidas sobre estes Termos de Uso, entre em contato conosco:
            {"\n"}• WhatsApp: (27) 99801-2664
            {"\n"}• E-mail: contato@appconverter.com.br
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
