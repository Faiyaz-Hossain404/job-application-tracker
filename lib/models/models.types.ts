export interface JobApplication {
  _id: string;
  company: string;
  position: string;
  location?: string;
  status: string;
  notes?: string;
  salary: string;
  jobUrl?: string;
  appliedDate?: Date;
  tags?: string[];
  description?: string;
}

export interface Column {
  _id: string;
  name: string;
  jobApplications: JobApplication;
}

export interface Board {
  _id: string;
  name: string;
  columns: Column[];
}
