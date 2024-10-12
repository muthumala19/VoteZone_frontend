import React from 'react';
import { Paper, Typography, Box, Link, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StyledCardLayout from './StyledCardLayout';

export enum Status {
  CHECK = 'CHECK',
  WARNING = 'WARNING',
  HOURGLASS = 'HOURGLASS',
}

const ChecklistItem = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  padding: theme.spacing(0.5),
  gap: theme.spacing(1),
}));

interface ChecklistItemProps {
  id: number;
  status: Status;
  message: string;
  link?: string;
}

interface ElectionChecklistProps {
  title: string;
  checklistItems: ChecklistItemProps[];
}

const iconMapping = {
  CHECK: <CheckCircleIcon color="success" />,
  WARNING: <WarningIcon color="warning" />,
  HOURGLASS: <HourglassEmptyIcon color="action" />,
};

const ElectionChecklist: React.FC<ElectionChecklistProps> = ({ title, checklistItems }) => (
  <StyledCardLayout title={title}>
    <Box>
      {checklistItems.map((item, _index) => (
        <ChecklistItem key={item.id}>
          {iconMapping[item.status]} <Typography component="span">{item.message}</Typography>
          {item.link && (
            <>
              <Link href={item.link} underline="hover">
                <ArrowOutwardIcon />
              </Link>
            </>
          )}
        </ChecklistItem>
      ))}
    </Box>
  </StyledCardLayout>
);

export default ElectionChecklist;
