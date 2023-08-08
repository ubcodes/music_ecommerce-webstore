export default {
    name: 'product', // schema need to have a name
    title: 'Product',
    type: 'document',
    fields: [ // the fields are going to be object based
        {
            name: 'image',
            title: 'Image',
            type: 'array', // we can have an array of images
            of: [{ type: 'image' }], // and the type of the array is going to be an image
            options: {
                hotspot: true, // enables the user interface forselecting what areas of an image should be cropped, or what shouldn't be cropped
            }
        },
        //next field
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },{
            name: 'slug', // a slug is like a unique string
            title: 'Slug',
            //sanity as custom type for unique identifiers
            type: 'slug',
            options: {
                source: 'name', // it would generate a unique slug based on the name property 
                maxLength: 90, //90 characters
            }
        },
        // Every product should have a price,so we'd create the field for that 
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}