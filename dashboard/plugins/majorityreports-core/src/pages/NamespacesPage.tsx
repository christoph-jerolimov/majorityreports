import React from 'react';
import useAsync from 'react-use/lib/useAsync';
import {
  Page,
  Header,
  Content,
  Progress,
  ResponseErrorPanel,
  Table,
  TableColumn,
} from '@backstage/core-components';

type Namespace = {
  name: string;
  uid: string;
  creationTimestamp: string;
  updateTimestamp: string;
  labels: Record<string, string>;
  annotations: Record<string, string>;
};

const columns: TableColumn[] = [
  { title: 'Name', field: 'name' },
  { title: 'Created', field: 'creationTimestamp', type: 'datetime' },
];

export const TableContent = () => {
  const { value: data, loading, error } = useAsync(async (): Promise<Namespace[]> => {
    return fetch('http://localhost:7007/api/proxy/api/api/namespaces').then((response) => response.json());
  }, []);

  if (loading || !data) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return (
    <Table
      columns={columns}
      data={data}
    />
  );
};

export const NamespacesPage = () => (
  <Page themeId="namespaces">
    <Header title="Namespaces" />
    <Content>
      <TableContent />
    </Content>
  </Page>
);
