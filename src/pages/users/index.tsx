import { useState } from 'react'
import { Form, Input, Button, Checkbox, Table, Modal, Space } from 'antd'
import { getUsers, getUser, createUser, deleteUser, changeUser } from '../../api/usersApi'

const Users = () => {
  const [form] = Form.useForm()
  const [dataSource, setDataSource] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const [userId, setUserId] = useState("")
  const getUsersList = async () => {
    const { data, error } = await getUsers()
    if (error) {
      return
    }
    setDataSource(data.users)
  }

  const fetchUser = () => {
    getUser('60e00257682d145140ee7c27').then((data) => console.log(data))
  }

  const create = () => {
    showModal(true)
  }

  const deleteById = (id: string) => () => {
    deleteUser(id)
    getUsersList()
  }

  const changeData = (data: any) => () => {
    setUserId(data._id)
    form.setFieldsValue(data)
    showModal()
  }

  const showModal = (flag = false) => {
    setIsAdd(flag)
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    const values = await form.validateFields()
    if (!values) {
      return
    }
    isAdd
      ? createUser({
          name: values.name,
          age: Number(values.age),
        })
      : changeUser({
        id: userId,
        name: values.name,
        age: Number(values.age),
      })
    setIsModalVisible(false)
    getUsersList()
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'id',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: any) => (
        <Space size="middle">
          <a onClick={changeData(record)}>修改</a>
          <a onClick={deleteById(record._id)}>删除</a>
        </Space>
      ),
    },
  ]

  return (
    <div>
      <Modal
        title={isAdd ? '新增' : '修改'}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} name="control-hooks">
          <Form.Item name="name" label="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="age" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
      <Button onClick={getUsersList}>查询</Button>
      <Button onClick={create}>创建</Button>
      <Button onClick={fetchUser}>user</Button>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey="_id"
        pagination={false}
        scroll={{
          y: 500,
        }}
      />
    </div>
  )
}

export default Users
