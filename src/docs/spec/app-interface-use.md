**文件位置**

src/views/*.vue

**引用命名**

虽然直接使用函数也是可以正常工作，但是有效的使用 `namespace` 有助于提高代码的可读性

您可以使用任何形式的有意义命名方式来引用接口。例:

- `import HTTP_DEPLOY_ENV from '@/api/deploy-env'` // 使用常量形式来引用接口

- `import DeployEnvService from '@/api/deploy-env'` // 使用大写驼峰形式来引用接口
