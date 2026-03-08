import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { solutionsData } from '../data/solutions';
import { DetailTemplate } from '../components/DetailTemplate';

export function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutionsData.find(s => s.id === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return <DetailTemplate type="Solution" data={solution} />;
}
