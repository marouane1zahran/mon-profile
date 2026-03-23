import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  date: string;
  tags?: string[];
  summary: string;
  children?: ReactNode;
  icon?: ReactNode;
  accentColor?: 'blue' | 'green' | 'purple' | 'orange';
}

const accentColorMap = {
  blue: 'border-blue-500',
  green: 'border-green-500',
  purple: 'border-purple-500',
  orange: 'border-orange-500',
};

export function ProjectCard({
  title,
  date,
  tags = [],
  summary,
  children,
  icon,
  accentColor = 'blue',
}: ProjectCardProps) {
  return (
    <Card className={`p-6 border-l-4 ${accentColorMap[accentColor]} hover:shadow-lg transition-shadow`}>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
            <div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
            </div>
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <Badge key={idx} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <p className="text-gray-700 dark:text-gray-300">{summary}</p>

        {children}
      </div>
    </Card>
  );
}
