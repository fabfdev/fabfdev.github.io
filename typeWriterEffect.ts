type Props = {
  onUpdate: (current: string) => void;
  onDone: (current: string) => void;
};

const CURSOR = "|";

const MESSAGES = ["E-commerce", "Delivery", "Serviço", "Ensino"];

export function typeWritterEffect({ onUpdate, onDone }: Props) {
  let messageIndex = 0;
  let charIndex = 0;

  function type() {
    const currentMessage = MESSAGES[messageIndex];
    if (!currentMessage) {
      messageIndex = 0;
      charIndex = 0;
      return;
    }

    onUpdate(currentMessage.slice(0, charIndex + 1) + CURSOR);
    charIndex++;

    if (charIndex < currentMessage.length) {
      setTimeout(type, 150);
    } else {
      // Move to next message
      messageIndex = (messageIndex + 1) % MESSAGES.length;
      charIndex = 0;
      setTimeout(type, 2000);
      onDone(currentMessage);
    }
  }

  type();
}
