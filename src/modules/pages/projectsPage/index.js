/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React from 'react';
import { projectsInfo } from '../../../resources/data/projectsInfo';
// import { AccordionFilter } from '../../../library/common/components/AccordionFilter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { renderChips } from '../../../library/common/utils/jsxUtils';

function ProjectsPage() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Container>
      <Grid container spacing={6} {...(matchesXS && { sx: { mt: 3, mb: 9 } })}>
        <Grid item xs={12} md={12}>
          <Stack spacing={4}>
            <Typography align="center" variant="h4">
              Proyectos
            </Typography>
            {/* <AccordionFilter /> */}
          </Stack>
        </Grid>
        {projectsInfo.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Card>
              <CardContent>
                <Stack spacing={1}>
                  <Stack direction={'row'} justifyContent={'space-between'} pb={2}>
                    <Stack direction={'row'} alignItems={'baseline'} spacing={1}>
                      <Chip label={item.area.name} color={item.area.color} size="small" />
                    </Stack>
                    <Stack direction={'row'} alignItems={'flex-end'} spacing={1}>
                      <Typography variant="caption">Dificultad:</Typography>
                      <Rating readOnly precision={0.5} value={item.rating} />
                    </Stack>
                  </Stack>
                  <Typography mb={2} variant="h5">
                    {item.name}
                  </Typography>
                  <Stack direction={'row'} spacing={{ xs: 4, md: 12 }}>
                    <Stack alignItems={'baseline'} spacing={{ xs: 1, md: 2 }}>
                      <Typography variant="caption">Estado:</Typography>
                      <Chip label={item.status} size="small" />
                    </Stack>
                    <Stack alignItems={'baseline'} spacing={{ xs: 1, md: 2 }}>
                      <Typography variant="caption">Fuente:</Typography>
                      <Chip label={item.source} size="small" />
                    </Stack>
                  </Stack>
                  <Stack spacing={{ xs: 1, md: 2 }} alignItems={'baseline'}>
                    <Typography variant="caption">Objetivo:</Typography>
                    <Typography variant="body1">{item.goal}</Typography>
                  </Stack>
                </Stack>
              </CardContent>
              <Divider variant="middle" />
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6">Aptitudes</Typography>
                </Stack>
                <Stack spacing={1}>
                  {Object.entries(item.aptitudes).map(([key, value]) => renderChips(key, value, 'secondary'))}
                </Stack>
              </CardContent>
              <Divider variant="middle" />
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6">Tecnologias</Typography>
                </Stack>
                <Stack spacing={1}>
                  {Object.entries(item.technologies).map(([key, value]) => renderChips(key, value, 'primary'))}
                </Stack>
              </CardContent>
              <Divider variant="middle" />
              <CardActions>
                <IconButton href={item.repository} target="_blank">
                  <GitHubIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export { ProjectsPage };
