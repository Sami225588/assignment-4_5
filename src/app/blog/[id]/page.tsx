// src/app/blog/[id]/page.tsx

const blogDetails = {
    1: { title: 'FULL BODY WORKOUT', content: 'A full-body workout routine targets all major muscle groups in a single session. Ideal for beginners or those with limited training time, this approach improves overall strength, endurance, and fitness levels. The workouts typically include compound exercises like squats, deadlifts, bench presses, and rows, allowing for efficient calorie burning and muscle engagement. These workouts can be performed 2-3 times per week with rest days in between to allow for recovery.' },
    2: { title: 'UPPER AND LOWER SPLIT', content: 'An upper and lower body split divides workouts into two distinct sessions—one focused on upper body exercises (like bench presses, rows, and shoulder presses) and the other on lower body movements (like squats, lunges, and deadlifts). This split allows for increased volume and intensity for each muscle group while providing adequate recovery time. Training can be scheduled 4 days a week, alternating between upper and lower workouts, promoting balanced development and strength gains.' },
    3: { title: 'PUSH PULL LEG', content: 'The Push Pull Legs (PPL) workout splits exercises into three categories: push (chest, shoulders, triceps), pull (back, biceps), and legs (quads, hamstrings, calves). This program can be cycled over six days, allowing for focused training on specific muscle groups while enhancing recovery. PPL workouts emphasize compound movements like bench presses and deadlifts while incorporating isolation exercises, making it suitable for intermediate to advanced lifters looking to build muscle and strength.' },
    4: { title: 'PUSH PULL LEG PRO', content: 'The Push Pull Leg Pro routine is an advanced variation of the traditional PPL split, incorporating more volume and intensity. This program often includes variations of each exercise, advanced techniques like drop sets and supersets, and periodization strategies to maximize strength and hypertrophy. Training can be structured over six days, focusing on each muscle group more frequently while en' },
    5: { title: 'SUPPLEMENTS', content: 'Supplements can support your fitness journey by enhancing performance, recovery, and overall health. Common supplements include protein powders for muscle repair, creatine for strength and power, branched-chain amino acids (BCAAs) for recovery, and pre-workout formulas for increased energy and focus. Incorporating supplements should complement a balanced diet and training regimen, helping you achieve your fitness goals more effectively.' },
    6: { title: 'DIET', content: 'This program combines elements from full-body workouts, upper and lower splits, and push-pull leg routines, tailored to individual fitness levels and goals. It includes varied training methodologies, focusing on strength, endurance, flexibility, and recovery. With personalized supplementation recommendations and progression tracking, this comprehensive approach helps participants stay motivated and on track to achieve their desired fitness outcomes.' },
  };
  
  export default function BlogDetails({ params }: { params: { id: string } }) {
    const { id } = params;
    
    
    const blog = blogDetails[id as unknown as keyof typeof blogDetails];
  
    if (!blog) return <p>Blog not found</p>;
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-white bg-blue-500 p-4 font-bold mb-4">{blog.title}</h1>
        <p className="text-white bg-blue-500 p-4">{blog.content}</p>
      </div>
    );
  }
  