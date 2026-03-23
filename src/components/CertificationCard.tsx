import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  icon?: React.ReactNode;
}

export function CertificationCard({
  name,
  issuer,
  date,
  skills,
  icon,
}: CertificationCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow border-t-4 border-t-yellow-500">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
            <div>
              <h3 className="text-2xl font-bold">{name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{issuer}</p>
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
            {date}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <Badge key={idx} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
