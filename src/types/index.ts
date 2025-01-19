export interface NavLinkProps {
  text: string;
}

export interface StatCardProps {
  number: string;
  text: string;
  bgColor: string;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectCardProps {
  image: string;
  category?: string;
  title?: string;
  overlay?: boolean;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface ContactInfoProps {
  icon: string;
  title: string;
  details: string[];
}

export interface FooterLinkProps {
  title: string;
  links: string[];
}
