import { Arg, InputType, Mutation, Query , Resolver, Field } from "type-graphql";
import Category from "./Category";
import CategorySchema from '../../model/CategorySchema';

interface ICreateCategory {
    name: String;
    description: String;
  }

@InputType()
class CategoryInput {
    @Field()
    name: String;
    @Field()
    description: String;
}

@Resolver(Category)
class CategoryResolver {

    @Query(() => [Category])
    async categories() {
        const categories = await CategorySchema.find();
        return categories;
    }

    @Mutation(() => Category)
    async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
        const category = await CategorySchema.create<ICreateCategory>(categoryInput);
        return category;
    }
}

export default CategoryResolver;