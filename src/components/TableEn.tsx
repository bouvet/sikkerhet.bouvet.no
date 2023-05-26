import React, { MouseEventHandler } from 'react'

type Column = { name: string; accessor: string }

const prepareHeaders = (headers: Array<string>): Array<Column> => {
  const prepared: Array<Column> = []
  headers.forEach((col) => {
    prepared.push({ name: col, accessor: col.replace(/ /g, '') })
  })

  return prepared
}

const defaultHeaders: string[] = ["Name", "Description", "Category"]
const filteredKeys: string[] = ["url"]

export const Table = (props: {
  rows: Array<any>
  headers?: Array<string>
  codeStyledName?: boolean
  onRowClicked?: MouseEventHandler
}): JSX.Element => {
  const { rows } = props
  const headers = props.headers ?? defaultHeaders
  const codeStyledName = props.codeStyledName ?? true
  const onRowClicked = props.onRowClicked
    ? props.onRowClicked
    : (event: any) => {
      const accessKey = event.target.accessKey || event.target.parentElement.accessKey || event.target.parentElement.parentElement.accessKey
      if (accessKey) window.open(accessKey, "_blank")
    }
  const heads = prepareHeaders(headers)

  return (
    <>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            {heads.map((head) => (
              <th key={`head-${head.accessor}`}>{head.name}</th>
            ))}
          </tr>
        </thead>
        <tbody onClick={onRowClicked} style={{ cursor: 'pointer' }}>
          {rows?.map((row: any, index: number) => (
            <tr
              key={row.name}
              id={row.name}
              tabIndex={row.index ?? index}
              accessKey={row.url ?? row._id}
              title={row.url}
              onClick={onRowClicked}
            >
              {Object.keys(row)
                .filter((attrKey: string) => !filteredKeys.includes(attrKey))
                .map((attrKey: string, _index: number) => (
                  <td key={row[attrKey]}>
                    {
                      codeStyledName && attrKey === 'name'
                        ? <code>{row[attrKey]}</code>
                        : <>{row[attrKey].toString() ?? row[attrKey]}</>
                    }
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}