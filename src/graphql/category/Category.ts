import { Field, ObjectType } from "type-graphql";



@ObjectType()

class Category {
    @Field()
    description: String;

    @Field()
    name: String;

    @Field()
    _id: String;

}

export default Category;