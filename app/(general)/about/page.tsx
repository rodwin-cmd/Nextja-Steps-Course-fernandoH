import { Metadata } from "next";

export const metadata : Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['About Page', 'Fernando', 'Informacion']
};

export default function aboutPage() {
  return (
    
    <span className="text-7xl">About Page</span>
  )
}

