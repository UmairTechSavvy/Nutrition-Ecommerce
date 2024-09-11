import React from 'react';
import img4 from "./img4.jpeg";

const HomeA1 = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-start p-6 overflow-y-auto z-50">
      <button
        className="absolute top-4 right-4 text-black text-3xl"
        onClick={onClose}
      >
       &times;
      </button>

      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        <strong>How Do You Create Healthy Habits — and Make Them Stick?</strong>
      </h1>
      <h2 className="text-xl mb-4 text-center text-gray-600">
        Creating a healthier you starts with knowing the basics of good habit-building.
      </h2>
      <img
        src={img4}
        alt="Healthy Habits"
        className="w-full max-w-3xl h-auto mb-6 object-cover"
      />
      <h2 className="text-xl font-semibold mb-4 text-start text-gray-800">
        Nutrition, Health and Wellness
      </h2>
      <p className="mb-6 text-center text-gray-700">
        Better sleep. Less screen time. More steps. We’ve all dreamed up plans about how we can improve our habits and take better care of ourselves. But then there’s work. Kids. School. Life. And all those things can get in the way.
        What if there was a psychology-backed way you could make healthy habits stick? Follow our guide and see how you can achieve those health goals with ease.
      </p>
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        <strong>The Psychology of Habits</strong>
      </h1>
      <p className="mb-6 text-center text-gray-700">
        Before we get into how to form new habits, let’s go back to the basics.
        What’s a habit? A habit is a behavior or action that you perform repeatedly. Over time, your brain has learned that when you perform this action, you receive some sort of reward or positive feeling, so you continue to do it.
        That’s what we call a feedback loop. Essentially, you’ve conditioned yourself to repeat this activity.
        For example, let’s say your goal is to start feeling stronger. You start by adding one protein item to each meal and you begin feeling better and fuller after meals. Because you feel good, you continue to add protein to your diet. Eventually, you start to notice you’re feeling strong at the gym. Your brain now associates protein with feeling strong. That rewarding feeling gets you to consistently include protein in your diet.
        Congratulations: You’ve formed a habit.
      </p>
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        <strong>It's All About Momentum</strong>
      </h1>
      <p className="mb-6 text-center text-gray-700">
        When you look at human behavior, you also begin to realize that our days consist of a series of actions, strung together. Each action triggers the next one.
        Here’s a good example of this connectedness: When you wake up, you head to the kitchen and prepare breakfast. While doing so, you notice you’re almost out of cereal. You take out your phone, add cereal to your shopping list and make plans to go to the grocery store later. You then check your fridge and pantry to see if there’s anything else you need while at the store, adding them to the list, and so on.
        When forming new habits, you can use the momentum of human behavior to your advantage. We’ll show you how in a moment.
      </p>
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        <strong>Be Specific and Intentional</strong>
      </h1>
      <p className="mb-6 text-center text-gray-700">
        The key to forming new healthy habits is to be specific and clear about your goals. It’s been shown that people are more successful in sticking to their goals when there’s a specific plan in place.1
        For example, if you want to get more steps in, tell yourself: “I will take a 15-minute walk every day during my lunch break.” You’ll find more success than just saying “I will go on more walks.”
      </p>
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">References</h2>
      <p className="text-center text-gray-700">
        Clear, J. (2018). Atomic Habits. New York: Penguin Publishing Group.
      </p>
    </div>
  );
};

export default HomeA1;
