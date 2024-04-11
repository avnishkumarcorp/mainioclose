export const ticketsColumns = [
    {
      field: "id",
      headerName: "S.No",
      width: 80,
      filterable: false,
      renderCell: (props) => {
        return (
          <p className="mb-0">
            {props.api.getRowIndexRelativeToVisibleRows(props?.row?.id) + 1}
          </p>
        )
      },
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 250,
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
    },
  ]