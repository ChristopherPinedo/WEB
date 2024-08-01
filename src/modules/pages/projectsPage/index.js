/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import { BasePageLayout } from '../../layouts/BasePageLayout';
import { SectionDashboardProjects } from './sections/SectionDashboardProjects';

function ProjectsPage() {
  return (
    <BasePageLayout>
      {/* Sección: DashboardProjects */}
      <Grid item xs={12}>
        <SectionDashboardProjects />
      </Grid>
    </BasePageLayout>
  );
}

export { ProjectsPage };
