export function formatCPF(cpf) {
  return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9)}`;
}

export function formatTelephone(telephone) {
  return `(${telephone.substring(0, 2)}) ${telephone.substring(2, 7)}-${telephone.substring(7)}`;
}

export function formatStatus(status) {
  switch (status) {
    case 'ativo':
      return 'Ativo';
    case 'inativo':
      return 'Inativo';
    case 'aguardando_ativacao':
      return 'Aguardando ativação';
    case 'desativado':
      return 'Desativado';
    default:
      return status;
  }
}

export function unformatCPF(cpf) {
  return cpf.replace(/[^\d]/g, '');

}

export function unformatTelephone(telephone) {
  return telephone.replace(/[^\d]/g, '');
}

export function unformatStatus(status) {
  switch (status) {
    case 'Ativo':
      return 'ativo';
    case 'Inativo':
      return 'inativo';
    case 'Aguardando ativação':
      return 'aguardando_ativacao';
    case 'Desativado':
      return 'desativado';
    default:
      return status;
 }
}

export function getStatusColor(status) {
  switch (status) {
    case 'Ativo':
      return 'green';
    case 'Inativo':
      return 'red';
    case 'Aguardando ativação':
      return 'yellow';
    case 'Desativado':
      return 'gray';
    default:
      return 'green';
  }
}