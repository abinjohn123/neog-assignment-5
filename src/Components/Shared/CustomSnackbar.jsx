import {
  enqueueSnackbar as enqueunotistack,
  SnackbarProvider,
  MaterialDesignContent,
} from 'notistack';
import styled from 'styled-components';

import './shared.scss';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-info': {
    backgroundColor: '#3286fc',
    fontSize: '1.4rem',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#dc2626',
    fontSize: '1.4rem',
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: '#047857',
    fontSize: '1.4rem',
  },
}));

export const useCustomSnackbar = () => {
  const enqueueSnackbar = (message, variant = 'success') =>
    enqueunotistack(message, {
      variant,
      preventDuplicate: true,
      persist: false,
      autoHideDuration: 3000,
      anchorOrigin: { horizontal: 'center', vertical: 'top' },
    });
  return {
    enqueueSnackbar,
  };
};

export const CustomSnackbarProvider = ({ children }) => (
  <SnackbarProvider
    Components={{
      success: StyledMaterialDesignContent,
      error: StyledMaterialDesignContent,
      info: StyledMaterialDesignContent,
    }}
  >
    {children}
  </SnackbarProvider>
);

export default CustomSnackbarProvider;
