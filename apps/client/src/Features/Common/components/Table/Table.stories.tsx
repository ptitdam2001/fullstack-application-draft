import type { Meta, StoryObj } from '@storybook/react'
import { default as Table } from './Table'
import { faker } from '@faker-js/faker'
import { Close } from '../Icon'

interface DataType {
  avatar: string
  user: string
  role: string
  createdAt: Date
  status: string
}

function createData(): DataType {
  return {
    avatar: faker.image.avatar(),
    user: faker.person.fullName(),
    role: faker.person.jobTitle(),
    createdAt: faker.date.past(),
    status: faker.helpers.arrayElement(['active', 'inactive']),
  }
}

const data = [createData(), createData(), createData(), createData(), createData(), createData()]

const meta = {
  title: 'Common/Table',
  component: Table<DataType>,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  },
} satisfies Meta<typeof Table<DataType>>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleUsage: Story = {
  args: {
    title: 'My table',
    columns: [
      {
        key: 'user',
        label: 'User',
        render: (elt: DataType) => (
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <img alt="profil" src={elt.avatar} className="mx-auto object-cover rounded-full h-10 w-10 " />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{elt.user}</p>
            </div>
          </div>
        ),
      },
      {
        key: 'role',
        label: 'Role',
      },
      {
        key: 'createdAt',
        label: 'Created at',
        render: (elt) => <>{elt.createdAt.toDateString()}</>,
      },
      {
        key: 'status',
        label: 'Status',
      },
    ],
    data,
    rowActions: [
      {
        icon: <Close />,
        label: 'Close',
        onClick: (row) => alert(row.user),
        disable: (row) => row.status === 'inactive',
      },
    ],
  },
}
