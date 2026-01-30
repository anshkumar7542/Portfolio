import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  genres: string[];
  techStack: string[];
  imageGradient: string;
  icon: React.ReactNode;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  genres, 
  techStack, 
  imageGradient,
  icon,
  githubUrl,
  liveUrl,
  index 
}: ProjectCardProps) => {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      {/* Movie Poster Card */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden card-hover">
        {/* Gradient Background */}
        <div className={`absolute inset-0 ${imageGradient}`} />
        
        {/* Icon/Imagery */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
          {icon}
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="font-display text-2xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-1 mb-3">
            {techStack.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs bg-secondary/80">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary hover:bg-primary/90 transition-colors"
              >
                <Play className="w-4 h-4" />
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {genres.map((genre) => (
            <Badge key={genre} className="bg-primary/90 text-primary-foreground text-xs">
              {genre}
            </Badge>
          ))}
        </div>

        {/* Netflix-style maturity rating */}
        <div className="absolute top-3 right-3 bg-background/80 px-2 py-1 text-xs font-bold border border-foreground/30">
          HD
        </div>
      </div>

      {/* Title below poster */}
      <div className="mt-3 px-1">
        <h4 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
          {title}
        </h4>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
