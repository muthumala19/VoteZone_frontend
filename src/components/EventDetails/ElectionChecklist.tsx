import React from 'react';
import { Paper, Typography, Box, Link, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export enum Status {
  CHECK = 'CHECK',
  WARNING = 'WARNING',
  HOURGLASS = 'HOURGLASS',
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  gap: theme.spacing(2),
}));

const ChecklistItem = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  padding: theme.spacing(0.5),
  gap: theme.spacing(1),
}));

const StyledTypography = styled(Typography)({
  paddingBottom: 20,
});
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
  <StyledPaper>
    <StyledTypography variant="h5">{title}</StyledTypography>
    <Divider />
    <Box pt={2}>
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
  </StyledPaper>
);

export default ElectionChecklist;
