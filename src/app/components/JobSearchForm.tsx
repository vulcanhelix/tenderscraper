"use client";
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const JobSearchForm: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission (implementation details later)
    console.log('Job Title:', jobTitle);
    console.log('Company Name:', companyName);
    console.log('Location:', location);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
        <Input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setJobTitle(e.target.value)}
          placeholder="e.g., Software Engineer"
          className="mt-1"
        />
      </div>
      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
        <Input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
          placeholder="e.g., Google"
          className="mt-1"
        />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location (Optional)</label>
        <Input
          type="text"
          id="location"
          value={location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
          placeholder="e.g., Mountain View, CA"
          className="mt-1"
        />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default JobSearchForm;
