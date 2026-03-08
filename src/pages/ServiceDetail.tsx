import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { DetailTemplate } from '../components/DetailTemplate';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find(s => s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <DetailTemplate type="Service" data={service} />;
}
