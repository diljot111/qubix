interface ProcessStepProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ProcessStep = ({ step, icon, title, description }: ProcessStepProps) => {
  return (
    <div className="relative w-full max-w-[270px] flex flex-col gap-4 rounded-2xl p-5 text-white bg-gradient-to-br from-[#0C1739] via-[#0A1C34] to-[#08192F] border border-[#1C2D4F] shadow-md">
      <div className="flex items-center justify-between">
        <div className="text-[28px] ">{icon}</div>
        <div className="text-3xl font-bold text-white/80">{step}</div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
};
