export interface JobModel {
  id: number;
  titel: string;
  description: string;
  location: string;
  salary: number;
  requirmnets: string;
  datePosted: string;
  rating?: number;
  category?: string;
  image?: string;
}
