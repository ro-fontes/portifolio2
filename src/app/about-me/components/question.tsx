interface QuestionsProps {
  question: string;
  answer: string;
}

export function Question({ answer, question }: QuestionsProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <h4 className="font-semibold text-BASIC_MEDIUM_GRAY">{question}</h4>
      <p className="text-lg text-BASIC_DARK_GRAY">{answer}</p>
    </div>
  );
}
